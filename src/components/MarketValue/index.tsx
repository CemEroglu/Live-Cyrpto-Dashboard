import { baseCurrency } from '../../constants'
import { formatMarketValue } from '../../utils';
interface MarketValueProps{
    marketValue:number;
}

function MarketValue({marketValue}:MarketValueProps) {
  return (
    <div>{formatMarketValue(marketValue)} <span className="base-currency">{baseCurrency}</span></div>
  )
}

export default MarketValue