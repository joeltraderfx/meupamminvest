// Busca o histórico real de operações da conta via MetaApi (conexão somente
// leitura, usando a senha de investidor cadastrada no painel do MetaApi —
// nunca a senha principal) e recalcula o resultados.json do zero.
//
// Variáveis de ambiente necessárias:
//   METAAPI_TOKEN       - token da sua conta MetaApi
//   METAAPI_ACCOUNT_ID  - ID da conta MT4/MT5 dentro do MetaApi (não é o login da corretora)
//   RESULTS_START_DATE  - opcional, default: 1º de janeiro do ano atual
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { calculateMonthlyResults } from "./calculate.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_PATH = process.env.RESULTS_OUT_PATH || path.join(__dirname, "../../src/data/resultados.json");

// A API do MetaApi é regionalizada; "new-york" é a região padrão da maioria
// das contas provisionadas — se a sua conta estiver em outra região, ajuste aqui
// ou exporte METAAPI_REGION.
const REGION = process.env.METAAPI_REGION || "new-york";
const BASE_URL = `https://mt-client-api-v1.${REGION}.agiliumtrade.ai`;

function requireEnv(name) {
  const val = process.env[name];
  if (!val) throw new Error(`Variável de ambiente obrigatória não configurada: ${name}`);
  return val;
}

async function fetchAccountInfo({ accountId, token }) {
  const res = await fetch(`${BASE_URL}/users/current/accounts/${accountId}/accountInformation`, {
    headers: { "auth-token": token },
  });
  if (!res.ok) {
    throw new Error(`Falha ao buscar informações da conta: HTTP ${res.status} — ${await res.text()}`);
  }
  return res.json();
}

async function fetchAllDeals({ accountId, token, startTime, endTime }) {
  const allDeals = [];
  let offset = 0;
  const limit = 1000;

  while (true) {
    const url = `${BASE_URL}/users/current/accounts/${accountId}/history-deals/time/${startTime}/${endTime}?offset=${offset}&limit=${limit}`;
    const res = await fetch(url, { headers: { "auth-token": token } });
    if (!res.ok) {
      throw new Error(`Falha ao buscar histórico de negociações: HTTP ${res.status} — ${await res.text()}`);
    }
    const batch = await res.json();
    allDeals.push(...batch);
    if (batch.length < limit) break;
    offset += limit;
  }

  return allDeals;
}

function toNetDeals(rawDeals) {
  // Só deals de FECHAMENTO carregam o lucro realizado. Deals de abertura
  // (DEAL_ENTRY_IN) têm profit=0 e não entram na conta.
  return rawDeals
    .filter((d) => d.entryType === "DEAL_ENTRY_OUT" || d.entryType === "DEAL_ENTRY_INOUT")
    .map((d) => ({
      closeTime: new Date(d.time),
      netProfit: (d.profit || 0) + (d.commission || 0) + (d.swap || 0),
    }));
}

async function main() {
  const token = requireEnv("METAAPI_TOKEN");
  const accountId = requireEnv("METAAPI_ACCOUNT_ID");

  const now = new Date();
  const startTime = process.env.RESULTS_START_DATE || `${now.getUTCFullYear()}-01-01T00:00:00.000Z`;
  const endTime = now.toISOString();

  console.log(`Buscando histórico de ${startTime} até ${endTime}...`);

  const [accountInfo, rawDeals] = await Promise.all([
    fetchAccountInfo({ accountId, token }),
    fetchAllDeals({ accountId, token, startTime, endTime }),
  ]);

  const currentBalance = accountInfo.balance;
  console.log(`Saldo atual (via API): $${currentBalance}`);
  console.log(`Deals brutos recebidos: ${rawDeals.length}`);

  const netDeals = toNetDeals(rawDeals);
  console.log(`Operações fechadas (com lucro/prejuízo realizado): ${netDeals.length}`);

  if (netDeals.length === 0) {
    console.warn("Nenhuma operação fechada encontrada no período. Mantendo resultados.json como está.");
    return;
  }

  const result = calculateMonthlyResults(netDeals, currentBalance);

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(result, null, 2) + "\n");
  console.log(`Atualizado: ${OUT_PATH}`);
  console.log(`Retorno acumulado: +${result.cumulativeReturnPct}% | Saldo: $${result.initialBalance} → $${result.currentBalance}`);
}

main().catch((err) => {
  console.error("Erro ao atualizar resultados:", err.message);
  process.exit(1);
});
