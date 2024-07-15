import axios from 'axios';
import { getAllCurrenciesURL, numberOfRows, baseCurrency, sparklineInterval, sparklineLength } from '../constants';

const fetchSparkline = async (symbol: string) => {
  try {
    const endTime = Date.now();
    const startTime = endTime - sparklineLength
    const response = await axios.get(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${sparklineInterval}&startTime=${startTime}&endTime=${endTime}`
    );
    return response.data.map((kline: any) => parseFloat(kline[4])); // Closing prices
  } catch (error) {
    console.error(`Error fetching sparkline for ${symbol}:`, error);
    return [];
  }
};

const filterCurrencies = (data: any) => {
  return data.filter((asset: any) => (asset.symbol.endsWith(baseCurrency)) && (parseFloat(asset.lastPrice) !== 0)).slice(0, numberOfRows)
}
export const fetchAssets = async () => {
  try {
    const response = await axios.get(getAllCurrenciesURL);
    const updatedData = await Promise.all(filterCurrencies(response.data).map(async (currency: any) => {
      return {
        symbol: currency.symbol,
        lastPrice: parseFloat(currency.lastPrice),
        quoteVolume: parseInt(currency.quoteVolume),
        priceChangePercent: parseFloat(currency.priceChangePercent),
        sparkline: await fetchSparkline(currency.symbol)
      };
    }));
    return updatedData;
  } catch (error) {
    console.error('Error fetching assets:', error);
    throw error;
  }
};
