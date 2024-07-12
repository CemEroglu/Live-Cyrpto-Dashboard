import React from "react";
import { Asset } from "../interfaces/Asset";
import { TableHeaders } from "../constants";
import Symbol from "./Symbol";
import Price from "./Price";
import MarketValue from "./MarketValue";
import PriceChange from "./PriceChange";
import SparkLineChart from "./SparkLineChart";
import "./Table.css"
import "./Price.css"
import "./MarketValue.css"
interface TableProps {
  assets: Asset[];
}

function Table({ assets }: TableProps) {
  return (
    <div className="table-wrapper">
    <table className="table">
      <thead>
        <tr>
          {TableHeaders.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {assets.filter((asset)=>(asset.symbol.endsWith("USDT"))&&(asset.lastPrice!=0)).map((asset) => {
        return <tr>
            <td><Symbol symbol = {asset.symbol}/></td>
            <td className="price"><Price price={asset.lastPrice}/></td>
            <td className="market-value"><MarketValue marketValue={asset.quoteVolume}/></td>
            <td className="price-change positive"><PriceChange priceChange={asset.priceChangePercent}/></td>
            <td className="expand"><SparkLineChart data={asset.sparkline} priceChange={asset.priceChangePercent}/></td>
            </tr>;
      })}
      </tbody>
    </table>
    </div>
  );
}

export default Table;
