import React from 'react'
interface MarketValueProps{
    marketValue:number;
}
function MarketValue({marketValue}:MarketValueProps) {
  return (
    <div>{marketValue}</div>
  )
}

export default MarketValue