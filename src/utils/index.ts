export const formatMarketValue = (value: number): string => {
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

export const formatPrice = (value: number): string => {
  const thresholds = [1, 0.01, 0.0001, 0.000001, 0.00000001];
  const decimalPlaces = [2, 4, 6, 8, 10];

  for (let i = 0; i < thresholds.length; i++) {
    if (Math.abs(value) >= thresholds[i]) {
      return value.toFixed(decimalPlaces[i]);
    }
  }
  return value.toExponential(2);
};