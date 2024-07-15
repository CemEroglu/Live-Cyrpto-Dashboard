import React, { useState, useEffect } from 'react';
import { baseCurrency } from '../../constants';
import { formatPrice } from '../../utils';

interface PriceProps {
  price: number;
}

function Price({ price }: PriceProps) {
  const [prevPrice, setPrevPrice] = useState<number | null>(null);
  const [flashClass, setFlashClass] = useState<string>('');

  useEffect(() => {
    if (prevPrice !== null) {
      if (price > prevPrice) {
        setFlashClass('price-up');
      } else if (price < prevPrice) {
        setFlashClass('price-down');
      }
      setTimeout(() => setFlashClass(''), 1000); // Remove class after 1 second
    }
    setPrevPrice(price);
  }, [price]);

  return (
    <div className={`price ${flashClass}`}>
      {formatPrice(price)} <span className="base-currency">{baseCurrency}</span>
    </div>
  );
}

export default Price;
