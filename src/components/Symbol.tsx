import React from 'react'
interface SymbolProps {
    symbol: string;
}
function Symbol({symbol}:SymbolProps) {
  return (
    <div>{symbol}</div>
  )
}

export default Symbol