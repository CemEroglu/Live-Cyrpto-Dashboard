export const getAllCurrenciesURL = "https://api.binance.com/api/v3/ticker/24hr";
export const tableHeaders = ["Crypto", "Price", "Market Value", "24h Change", ""];
export const refreshPeriod = 10000; //Refresh the values every 10 seconds
export const baseCurrency = "USDT";
export const numberOfRows = 35;
export const sparklineInterval = '1h'
export const sparklineLength = 24 * 60 * 60 * 1000; // Last 24 hours