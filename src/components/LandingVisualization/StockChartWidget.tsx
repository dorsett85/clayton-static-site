import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { StockChartDto } from '../../types/stockChartDto';
import Highcharts from 'highcharts/highstock';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import { Button, CircularProgress, styled, TextField } from '@mui/material';

if (typeof window !== 'undefined') {
  highchartsAccessibility(Highcharts);
}

const baseFetchUrl = `${
  process.env.NODE_ENV === 'development' ? 'https://localhost:5001' : ''
}/api`;

const TickerForm = styled('form')`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

const ChartContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 400,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

const ChartLoader = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ChartElement = styled('div')`
  height: 100%;
`;

/**
 * Validate the ticker input string
 *
 * Validation checks occur when the string isn't empty. If a non-empty string is
 * returned then a validation error occurred.
 */
const validateTickers = (tickers: string): string => {
  if (tickers) {
    if (/^[^A-Za-z]/.test(tickers)) {
      return 'Must start with a letter';
    } else if (/[^A-Za-z|,\s]/.test(tickers)) {
      return 'Only letters and comma/space separated';
    } else if (/,\s?,/.test(tickers)) {
      return 'Remove extra comma';
    } else if (tickers.replace(/,/g, ' ').trim().split(/\s+/).length > 4) {
      return '4 or fewer tickers allowed';
    }
  }
  return '';
};

/**
 * Format the ticker string so it ends up in the form <TICKER>,<TICKER>,<...>
 */
const formatTickers = (tickers: string): string =>
  tickers.replace(/,/g, ' ').trim().replace(/\s+/g, ',').toUpperCase();

/**
 * Make a backend data request with the ticker string
 */
const fetchTickerData = (tickers: string): Promise<StockChartDto[]> =>
  fetch(`${baseFetchUrl}/stockchart/${tickers}`).then((res) => res.json());

/**
 * Render a highcharts stock chart with data and an HTMLElement to render the
 * chart into
 */
const renderChart = (data: StockChartDto[], el: HTMLElement): void => {
  Highcharts.stockChart(el, {
    title: {
      text: 'Closing Prices'
    },
    subtitle: {
      text: data
        .filter((v) => v.data.length)
        .map((v) => v.name)
        .join(', ')
    },
    tooltip: {
      xDateFormat: '%Y-%m-%d',
      shared: true
    },
    series: data
  });
};

export const StockChartWidget: React.FC = () => {
  const [tickers, setTickers] = useState('');
  const [tickerHelperText, setTickerHelperText] = useState('');
  const [chartLoading, setChartLoading] = useState(false);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const stockChartRef = useRef<HTMLDivElement | null>(null);

  const makeChart = async (): Promise<void> => {
    // Format the ticker string to send to the backend
    const formattedTickers = formatTickers(tickers);

    // Disable the update button and activate the progress loader while the data is fetched
    setChartLoading(true);

    try {
      const data = await fetchTickerData(formattedTickers);

      // Create the nice chart
      if (stockChartRef.current) {
        renderChart(data, stockChartRef.current);
      }
    } catch (err) {
      setTickerHelperText('Error loading chart data');
    }
    setChartLoading(false);
  };

  useEffect(() => {
    // appease Gatsby build and make sure the browser has the intersection
    // observer.
    if (
      typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      chartContainerRef.current
    ) {
      const chartContainerEl = chartContainerRef.current;
      const observer = new IntersectionObserver(([entry], observer) => {
        // only make the chart once on initial intersect
        if (entry.isIntersecting) {
          observer.unobserve(chartContainerEl);
          makeChart();
        }
      });
      observer.observe(chartContainerEl);
    }
  }, []);

  const handleOnFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    makeChart();
  };

  const handleOnTickerInput: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTickers(target.value);
    setTickerHelperText(validateTickers(target.value));
  };

  return (
    <>
      <TickerForm onSubmit={handleOnFormSubmit}>
        <TextField
          label='Enter stock tickers'
          placeholder='e.g., AAPL, GOOG'
          helperText={tickerHelperText}
          error={!!tickerHelperText}
          onInput={handleOnTickerInput}
        />
        <Button type='submit' disabled={chartLoading || !tickers || !!tickerHelperText}>
          Update
        </Button>
      </TickerForm>
      <ChartContainer ref={chartContainerRef}>
        {chartLoading && (
          <ChartLoader>
            <CircularProgress size={100} />
          </ChartLoader>
        )}
        <ChartElement ref={stockChartRef} />
      </ChartContainer>
    </>
  );
};
