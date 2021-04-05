const reducer = (a, b) => a.totalValueCashback + b.totalValueCashback;
export const selectCashbackTotalValue = state => state.sales.reduce(reducer)

export const selectAllSales = state => state.sales;