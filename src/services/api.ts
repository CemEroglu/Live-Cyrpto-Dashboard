import axios from 'axios';
import { getAllCurrencies } from '../constants';
import assert from 'assert';

const fetchSparkline = async (symbol: string) => {
  try {
    const interval = '1h'; // Interval for the sparkline data
    const endTime = Date.now();
    const startTime = endTime - 24 * 60 * 60 * 1000; // Last 24 hours
    const response = await axios.get(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`
    );
    return response.data.map((kline: any) => parseFloat(kline[4])); // Closing prices
  } catch (error) {
    console.error(`Error fetching sparkline for ${symbol}:`, error);
    return [];
  }
};

const filterCurrencies = (data: any) => {
  console.log(typeof data[0].lastPrice)
  return data.filter((asset:any)=>(asset.symbol.endsWith("USDT"))&&(parseFloat(asset.lastPrice) !== 0)).slice(0,35)
}
export const fetchAssets = async () => {
  try {
    const response = await axios.get(getAllCurrencies);
    console.log(response.data)
    console.log(filterCurrencies(response.data))
    const updatedData = await Promise.all(filterCurrencies(response.data).map(async (currency: any) => {
      return {
        symbol: currency.symbol,
        lastPrice: parseFloat(currency.lastPrice),
        quoteVolume: parseInt(currency.quoteVolume),
        priceChangePercent: parseFloat(currency.priceChangePercent),
        sparkline: await fetchSparkline(currency.symbol)
        // sparkline: []
      };
    }));
    return updatedData;
  } catch (error) {
    console.error('Error fetching assets:', error);
    throw error;
  }
};
