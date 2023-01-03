import { StockChartDto } from '../../types/stockChartDto';
import { styled } from '@mui/material';

const baseFetchUrl = `${
  process.env.NODE_ENV === 'development' ? 'https://localhost:5001' : ''
}/api`;

/**
 * Make a backend data request with the ticker string
 */
export const fetchTickerData = (tickers = ''): Promise<StockChartDto[]> =>
  fetch(`${baseFetchUrl}/stockchart/${tickers}`).then((res) => res.json());

export const ChartContainer = styled('div')(({ theme }) => ({
  height: 400,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));
