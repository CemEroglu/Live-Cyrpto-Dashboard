import React, {useState, useEffect} from "react";
import axios from "axios";
import {Asset} from "../interfaces/Asset"
import { getAllCurrencies } from "../constants";

const CryptoDashboard: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(getAllCurrencies);
        const assetsData = await Promise.all(
          response.data.map(async (asset: any) => {
            const symbol = asset.symbol;
            // const sparkline = await fetchSparkline(symbol); //To avoid too many requests, it's commented out for now
            const sparkline = [1,2,3];
            return {
              symbol,
              price: parseFloat(asset.lastPrice),
              marketCap: parseFloat(asset.quoteVolume),
              change24h: parseFloat(asset.priceChangePercent),
              sparkline,
            };
          })
        );
        setAssets(assetsData);
      } catch (error) {
        console.error("Error fetching assets:", error);
      }
    };

    const fetchSparkline = async (symbol: string) => {
      try {
        const interval = "1h"; // Interval for the sparkline data
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

    fetchAssets();
    const interval = setInterval(fetchAssets, 100000); // Update every 100 seconds

    return () => clearInterval(interval);
  }, []);
  return <div>CryptoDashboardContent</div>;
};

export default CryptoDashboard;
