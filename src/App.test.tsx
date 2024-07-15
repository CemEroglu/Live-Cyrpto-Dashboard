import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CryptoDashboard from "./pages/CryptoDashboard"; 
import { fetchAssets } from './services/api';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./services/api');
const mockedFetchAssets = fetchAssets as jest.MockedFunction<typeof fetchAssets>;

describe("<CryptoDashboard />", () => {
  test('renders loading spinner initially', () => {
    render(<CryptoDashboard />);
    const loadingElement = screen.getByAltText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
  test('renders table with assets after fetching data', async () => {
    const mockData = [
      {
        symbol: 'BTCUSDT',
        lastPrice: 50000,
        quoteVolume: 1000000,
        priceChangePercent: 5,
        sparkline: [50000, 50500, 51000],
      },
      {
        symbol: 'ETHUSDT',
        lastPrice: 3000,
        quoteVolume: 500000,
        priceChangePercent: -2,
        sparkline: [3000, 2950, 2900],
      },
    ];

    mockedFetchAssets.mockResolvedValueOnce(mockData);

    render(<CryptoDashboard />);

    await waitFor(() => {
      const btcElement = screen.getByText(/BTC/i);
      const ethElement = screen.getByText(/ETH/i);
      expect(btcElement).toBeInTheDocument();
      expect(ethElement).toBeInTheDocument();
    });

    const loadingElement = screen.queryByAltText(/Loading.../i);
    expect(loadingElement).not.toBeInTheDocument();
  });
});
