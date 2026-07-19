// Mesma lógica já validada manualmente (bateu centavo a centavo com o
// relatório oficial da corretora) — agora em JS, alimentada pela API em vez
// de um arquivo exportado à mão.

export function calculateMonthlyResults(deals, currentBalance) {
  // deals: [{ closeTime: Date, netProfit: number }], já filtrados (só fechamentos)
  const sorted = [...deals].sort((a, b) => a.closeTime - b.closeTime);

  const totalProfit = sorted.reduce((sum, d) => sum + d.netProfit, 0);
  const initialBalance = currentBalance - totalProfit;

  let runningBalance = initialBalance;
  const byMonth = new Map();

  for (const deal of sorted) {
    const key = `${deal.closeTime.getUTCFullYear()}-${String(deal.closeTime.getUTCMonth() + 1).padStart(2, "0")}`;
    if (!byMonth.has(key)) byMonth.set(key, []);
    byMonth.get(key).push(deal);
  }

  const months = [];
  const sortedKeys = [...byMonth.keys()].sort();
  const now = new Date();
  const currentMonthKey = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;

  for (const key of sortedKeys) {
    const groupDeals = byMonth.get(key);
    const startBalance = runningBalance;

    const curve = [startBalance];
    let balance = startBalance;
    let wins = 0, losses = 0;
    for (const d of groupDeals) {
      balance += d.netProfit;
      curve.push(balance);
      if (d.netProfit > 0) wins++; else losses++;
    }
    const endBalance = balance;

    let peak = curve[0];
    let maxDrawdownPct = 0;
    for (const v of curve) {
      if (v > peak) peak = v;
      const dd = ((peak - v) / peak) * 100;
      if (dd > maxDrawdownPct) maxDrawdownPct = dd;
    }

    const returnPct = ((endBalance - startBalance) / startBalance) * 100;
    const [year, month] = key.split("-");
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const label = `${monthNames[parseInt(month, 10) - 1]}/${year.slice(2)}${key === currentMonthKey ? "*" : ""}`;

    months.push({
      label,
      returnPct: Math.round(returnPct * 100) / 100,
      drawdownPct: Math.round(maxDrawdownPct * 100) / 100,
      trades: groupDeals.length,
      wins,
      losses,
      partial: key === currentMonthKey,
    });

    runningBalance = endBalance;
  }

  const cumulativeReturnPct = ((currentBalance - initialBalance) / initialBalance) * 100;
  const positiveMonthsStreak = (() => {
    let streak = 0;
    for (let i = months.length - 1; i >= 0; i--) {
      if (months[i].returnPct > 0) streak++;
      else break;
    }
    return streak;
  })();

  return {
    initialBalance: Math.round(initialBalance * 100) / 100,
    currentBalance: Math.round(currentBalance * 100) / 100,
    cumulativeReturnPct: Math.round(cumulativeReturnPct * 100) / 100,
    positiveMonthsStreak,
    lastUpdated: new Date().toISOString().slice(0, 10),
    months,
  };
}
