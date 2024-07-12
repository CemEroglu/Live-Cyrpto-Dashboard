import React from 'react'
interface PriceChangeProps{
    priceChange:number;
}
function PriceChange({priceChange}:PriceChangeProps) {
  return (
    <div style={{color:`${priceChange>0 ? 'green' : priceChange<0 ?'red': 'black'}`}}>{priceChange.toFixed(2)} %</div>
  )
}

export default PriceChange