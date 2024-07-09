import axios from 'axios';
import { getAllCurrencies } from '../constants';

export const fetchAssets = async () => {
  try {
    const response = await axios.get(getAllCurrencies);
    return response.data;
  } catch (error) {
    console.error('Error fetching assets:', error);
    throw error;
  }
};
