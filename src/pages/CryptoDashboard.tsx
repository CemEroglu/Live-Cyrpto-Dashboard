import React, { useState, useEffect } from "react";
import axios from "axios";
import { Asset } from "../interfaces/Asset";
import { getAllCurrencies } from "../constants";
import { fetchAssets } from "../services/api";
import Table from "../components/Table";

const CryptoDashboard: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAssets();
      // setPrevAssets(assets);
      setAssets(data);
    };

    getData();
    const interval = setInterval(getData, 5000000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      CryptoDashboardContent
      <Table assets = {assets} />
    </div>
  );
};

export default CryptoDashboard;
