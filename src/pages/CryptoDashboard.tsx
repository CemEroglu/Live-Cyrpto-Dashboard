// CryptoDashboard.tsx
/**
 * CryptoDashboard is a simple component that fetchs the data and shows it on the table component.
 * It shows loading spinner until the data is fetched.
 */
import React, { useState, useEffect } from "react";
import { Asset } from "../interfaces/Asset";
import { fetchAssets } from "../services/api";
import Table from "../components/Table";
import {refreshPeriod} from '../constants'

const CryptoDashboard: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); //To be able to show loading spinner only on startup
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAssets();
      setAssets(data);
      setIsLoading(false)
    };
    getData();
    const interval = setInterval(getData, refreshPeriod);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {
        isLoading? (<img className="loading-screen" src="loading.svg"/>):(<Table assets = {assets} />)
      }
      
    </div>
  );
};

export default CryptoDashboard;
