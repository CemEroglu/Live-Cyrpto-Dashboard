import React from "react";
import { Asset } from "../interfaces/Asset";
import { TableHeaders } from "../constants";
import Symbol from "./Symbol";
import Price from "./Price";
import MarketValue from "./MarketValue";
import PriceChange from "./PriceChange";
import SparkLineChart from "./SparkLineChart";
import "./Table.css"
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
            <td><Price price={asset.lastPrice}/></td>
            <td><MarketValue marketValue={asset.quoteVolume}/></td>
            <td className="price-change positive"><PriceChange priceChange={asset.priceChangePercent}/></td>
            <td className="expand"><SparkLineChart data={[10, 5, 7, 10, 12, 15, 9, 6, 11, 13, 8,10, 5, 7, 10, 12, 15, 9, 6, 11, 13, 8]}/></td>
            </tr>;
      })}
      </tbody>
    </table>
    </div>
  );
}

export default Table;
