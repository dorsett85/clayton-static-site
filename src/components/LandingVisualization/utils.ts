import { StockChartDto } from '../../types/stockChartDto';

const baseFetchUrl = `${
  process.env.NODE_ENV === 'development' ? 'https://localhost:5001' : ''
}/api`;

/**
 * Make a backend data request with the ticker string
 */
export const fetchTickerData = (tickers = ''): Promise<StockChartDto[]> =>
  fetch(`${baseFetchUrl}/stockchart/${tickers}`).then((res) => res.json());
