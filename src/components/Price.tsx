import { baseCurrency } from '../constants'
import { formatPrice } from '../utils';
interface PriceProps {
  price: number;
}

function Price({ price }: PriceProps) {

  return <div>{formatPrice(price)} <span className="base-currency">{baseCurrency}</span></div>;
}

export default Price;
