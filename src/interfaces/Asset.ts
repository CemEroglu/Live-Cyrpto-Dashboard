export interface Asset {
    symbol: string;
    lastPrice: number;
    quoteVolume: number;
    priceChangePercent: number;
    sparkline: number[];
  }