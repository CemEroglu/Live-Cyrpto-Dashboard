import React from "react";
import { Asset } from "../interfaces/Asset";
import { TableHeaders } from "../constants";
import Symbol from "./Symbol";
import Price from "./Price";
import MarketValue from "./MarketValue";
import PriceChange from "./PriceChange";
interface TableProps {
  assets: Asset[];
}

function Table({ assets }: TableProps) {
  return (
    <table>
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
            <td><PriceChange priceChange={asset.priceChangePercent}/></td>
            <td>Graph will be here</td>
            </tr>;
      })}
      </tbody>
    </table>
  );
}

export default Table;
