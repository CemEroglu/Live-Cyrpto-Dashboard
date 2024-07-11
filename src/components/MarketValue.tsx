import React from 'react'
interface MarketValueProps{
    marketValue:number;
}
export const formatNumber = (value: number): string => {
    const absValue = Math.abs(value);
  
    if (absValue >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(2) + 'B';
    } else if (absValue >= 1_000_000) {
      return (value / 1_000_000).toFixed(2) + 'M';
    } else if (absValue >= 1_000) {
      return (value / 1_000).toFixed(2) + 'T';
    } else {
      return value.toFixed(2); // No decimals for smaller numbers
    }
  };

function MarketValue({marketValue}:MarketValueProps) {
  return (
    <div>{formatNumber(marketValue)} USDT</div>
  )
}

export default MarketValue