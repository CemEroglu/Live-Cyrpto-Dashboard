import React from 'react'
interface PriceChangeProps{
    priceChange:number;
}
function PriceChange({priceChange}:PriceChangeProps) {
  return (
    <div style={{color:`${priceChange>0 ? 'green' : 'red'}`}}>{priceChange.toFixed(2)} %</div>
  )
}

export default PriceChange