import axios from 'axios';
import { getAllCurrencies } from '../constants';

export const fetchAssets = async () => {
  try {
    const response = await axios.get(getAllCurrencies);
    return response.data.map((currency:any)=>{
      return{
      symbol:currency.symbol,
      lastPrice:parseInt(currency.lastPrice),
      quoteVolume:parseInt(currency.quoteVolume),
      priceChangePercent:parseFloat(currency.priceChangePercent),
      sparkline:[]
      }
    });
  } catch (error) {
    console.error('Error fetching assets:', error);
    throw error;
  }
};
