import { calculateMonthlyResults } from "../scripts/resultados/calculate.mjs";
import assert from "node:assert/strict";
import { parse } from "csv-parse/sync";
import fs from "fs";

// Usa o MESMO CSV extraído do relatório real (gerado durante a análise manual)
// pra garantir que a lógica em JS bate exatamente com a lógica em Python já
// validada (que batia centavo a centavo com o "Lucro Líquido" oficial).
const csv = fs.readFileSync("/tmp/trades.csv", "utf-8");
const rows = parse(csv, { columns: true });

const deals = rows.map((r) => ({
  closeTime: new Date(r.close_time.replace(/\./g, "-").replace(" ", "T")),
  netProfit: parseFloat(r.profit),
}));

const CURRENT_BALANCE = 14573.39; // saldo final oficial do relatório

const result = calculateMonthlyResults(deals, CURRENT_BALANCE);

console.log(JSON.stringify(result, null, 2));

// Valores já validados manualmente em Python (bateram com o relatório oficial)
const expected = [
  { label: "Janeiro/26", returnPct: 2.74, drawdownPct: 0.43, trades: 35, wins: 18, losses: 17 },
  { label: "Fevereiro/26", returnPct: 6.70, drawdownPct: 0.55, trades: 37, wins: 26, losses: 11 },
  { label: "Março/26", returnPct: 4.84, drawdownPct: 0.77, trades: 47, wins: 30, losses: 17 },
  { label: "Abril/26", returnPct: 6.38, drawdownPct: 0.38, trades: 43, wins: 30, losses: 13 },
  { label: "Maio/26", returnPct: 7.43, drawdownPct: 0.40, trades: 31, wins: 22, losses: 9 },
  { label: "Junho/26", returnPct: 5.86, drawdownPct: 0.67, trades: 44, wins: 26, losses: 18 },
];

assert.equal(result.initialBalance, 10000.00, "saldo inicial deveria ser exatamente $10.000");
assert.equal(result.currentBalance, 14573.39);
assert.equal(result.cumulativeReturnPct, 45.73);

for (let i = 0; i < expected.length; i++) {
  const got = result.months[i];
  const exp = expected[i];
  assert.equal(got.label.replace("*", ""), exp.label, `mês ${i}: label`);
  assert.equal(got.returnPct, exp.returnPct, `mês ${i} (${exp.label}): lucro % deveria ser ${exp.returnPct}, veio ${got.returnPct}`);
  assert.equal(got.drawdownPct, exp.drawdownPct, `mês ${i} (${exp.label}): drawdown deveria ser ${exp.drawdownPct}, veio ${got.drawdownPct}`);
  assert.equal(got.trades, exp.trades, `mês ${i} (${exp.label}): trades`);
  assert.equal(got.wins, exp.wins, `mês ${i} (${exp.label}): wins`);
  assert.equal(got.losses, exp.losses, `mês ${i} (${exp.label}): losses`);
  console.log(`✅ ${exp.label}: lucro +${got.returnPct}% | drawdown ${got.drawdownPct}% — bate com o cálculo Python`);
}

console.log("\n🎉 Lógica JS bate 100% com a lógica Python já validada contra o relatório oficial.");
