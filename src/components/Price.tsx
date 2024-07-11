import React from "react";
interface PriceProps {
  price: number;
}
const formatNumber = (value: number): string => {
  const thresholds = [1, 0.01, 0.0001, 0.000001, 0.00000001];
  const decimalPlaces = [2, 4, 6, 8, 10];

  let numberValue = Number(value)
  for (let i = 0; i < thresholds.length; i++) {
    if (Math.abs(numberValue) >= thresholds[i]) {
      return numberValue.toFixed(decimalPlaces[i]);
    }
  }
//   debugger
  console.log(numberValue)
  return numberValue.toExponential(2); // For very small numbers, show in exponential notation
};


function Price({ price }: PriceProps) {

  return <div>{formatNumber(price)} USDT</div>;
}

export default Price;
