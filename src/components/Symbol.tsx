import React from 'react'
import { binanceCryptoIcons, binanceEtfIcons, binanceCurrencyIcons } from 'binance-icons'
import parse from 'html-react-parser';
import "./Symbol.css"

interface SymbolProps {
    symbol: string;
}
function Symbol({symbol}:SymbolProps) {
  const pureSymbol = symbol.substring(0, symbol.length-4);
  const hasIcon = binanceCryptoIcons.has(pureSymbol.toLowerCase())
  const getIcon = binanceCryptoIcons.get(pureSymbol.toLowerCase())
  return (
    <div className='icon'>
      {hasIcon && getIcon ? (parse(getIcon)):(parse(binanceCryptoIcons.get('btc') ||''))}
      {pureSymbol} / USDT
      </div>
  )
}

export default Symbol