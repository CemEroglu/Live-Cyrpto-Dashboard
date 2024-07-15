import { Asset } from "../interfaces/Asset";
import { tableHeaders } from "../constants";
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
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {assets.map((asset) => {
        return <tr key={asset.symbol}>
            <td><Symbol symbol = {asset.symbol}/></td>
            <td className="text-end"><Price price={asset.lastPrice}/></td>
            <td className="text-end"><MarketValue marketValue={asset.quoteVolume}/></td>
            <td className="text-end"><PriceChange priceChange={asset.priceChangePercent}/></td>
            <td><SparkLineChart data={asset.sparkline} priceChange={asset.priceChangePercent}/></td>
            </tr>;
      })}
      </tbody>
    </table>
    </div>
  );
}

export default Table;
