import React from 'react'
import { binanceCryptoIcons, binanceEtfIcons, binanceCurrencyIcons } from 'binance-icons'
import parse from 'html-react-parser';
import "./Symbol.css"
import { baseCurrency } from '../constants'

interface SymbolProps {
    symbol: string;
}
function Symbol({symbol}:SymbolProps) {
  const pureSymbol = symbol.substring(0, symbol.length-baseCurrency.length); //Remove the base currency's symbol
  const hasIcon = binanceCryptoIcons.has(pureSymbol.toLowerCase())
  const getIcon = binanceCryptoIcons.get(pureSymbol.toLowerCase())
  return (
    // In case of not finding the icon, btc icon will be shown
    <div className='icon'>
      {hasIcon && getIcon ? (parse(getIcon)):(parse(binanceCryptoIcons.get('btc') ||''))} 
      {pureSymbol}<span className="base-currency">/ {baseCurrency}</span>
      </div>
  )
}

export default Symbol