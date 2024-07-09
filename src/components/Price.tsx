import React from 'react'
interface PriceProps {
    price:number;
}
function Price({price}:PriceProps) {
  return (
    <div>{price}</div>
  )
}

export default Price