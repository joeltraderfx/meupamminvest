import assert from "node:assert/strict";
import fs from "fs";

process.env.METAAPI_TOKEN = "fake-token";
process.env.METAAPI_ACCOUNT_ID = "fake-account-id";
process.env.RESULTS_OUT_PATH = "/tmp/test-resultados.json";
process.env.RESULTS_START_DATE = "2026-01-01T00:00:00.000Z";

// Simula deals no formato REAL retornado pelo MetaApi (schema MetatraderDeal,
// confirmado na documentação oficial): DEAL_ENTRY_IN (abertura, profit=0) e
// DEAL_ENTRY_OUT (fechamento, carrega o profit real).
function makeDealPair(closeIso, profit) {
  return [
    { id: "1", entryType: "DEAL_ENTRY_IN", profit: 0, commission: 0, swap: 0, symbol: "XAUUSD", time: closeIso, type: "DEAL_TYPE_BUY", volume: 0.1 },
    { id: "2", entryType: "DEAL_ENTRY_OUT", profit, commission: 0, swap: 0, symbol: "XAUUSD", time: closeIso, type: "DEAL_TYPE_SELL", volume: 0.1 },
  ];
}

const mockDeals = [
  ...makeDealPair("2026-01-05T13:32:35.000Z", 100),
  ...makeDealPair("2026-01-10T13:32:35.000Z", -30),
  ...makeDealPair("2026-02-03T13:32:35.000Z", 200),
];

global.fetch = async (url) => {
  const u = String(url);
  if (u.includes("/accountInformation")) {
    return { ok: true, json: async () => ({ balance: 10270.0 }) };
  }
  if (u.includes("/history-deals/time/")) {
    // simula paginação: primeira chamada retorna tudo (menos que o limit=1000)
    return { ok: true, json: async () => mockDeals };
  }
  throw new Error("URL não mockada: " + u);
};

await import("../scripts/resultados/update-from-metaapi.mjs");

// dá um tick pro main() async terminar de escrever o arquivo antes de checar
await new Promise((r) => setTimeout(r, 200));

const result = JSON.parse(fs.readFileSync("/tmp/test-resultados.json", "utf-8"));
console.log(JSON.stringify(result, null, 2));

assert.equal(result.currentBalance, 10270.0);
assert.equal(result.initialBalance, 10000.0, "saldo inicial deveria ser derivado corretamente (10270 - 270 de lucro)");
assert.equal(result.months.length, 2, "deveria agrupar em 2 meses (janeiro e fevereiro)");
assert.equal(result.months[0].label.replace("*", ""), "Janeiro/26");
assert.equal(result.months[0].returnPct, 0.7, "lucro de jan: (100-30)/10000 = 0.7%");
assert.equal(result.months[1].label.includes("Fevereiro/26"), true);

console.log("\n🎉 Fluxo completo com API mockada funcionou corretamente.");
