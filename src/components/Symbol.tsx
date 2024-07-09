import React from 'react'
import { binanceCryptoIcons, binanceEtfIcons, binanceCurrencyIcons } from 'binance-icons'
import parse from 'html-react-parser';

interface SymbolProps {
    symbol: string;
}
function Symbol({symbol}:SymbolProps) {
  const pureSymbol = symbol.substring(0, symbol.length-4);
  const hasIcon = binanceCryptoIcons.has(pureSymbol.toLowerCase())
  const getIcon = binanceCryptoIcons.get(pureSymbol.toLowerCase())
  return (
    <div>
      {hasIcon && getIcon ? (parse(getIcon)):''}
      {symbol}
      {pureSymbol}
      </div>
  )
}

export default Symbol