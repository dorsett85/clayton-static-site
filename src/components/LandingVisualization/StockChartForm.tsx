import React, { ChangeEventHandler, useState } from 'react';
import { StockChartDto } from '../../types/stockChartDto';
import { Button, CircularProgress, styled, TextField } from '@mui/material';
import { fetchTickerData } from './utils';

interface StockChartFormProps {
  /**
   * Callback after stock data has been successfully fetched
   */
  onData(data: StockChartDto[]): void;
}

const TickerForm = styled('form')`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
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

export const StockChartForm: React.FC<StockChartFormProps> = ({ onData }) => {
  const [tickers, setTickers] = useState('');
  const [tickerHelperText, setTickerHelperText] = useState('');
  const [fetching, setFetching] = useState(false);

  const handleOnFormSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setFetching(true);

    // Format the ticker string to send to the backend
    const formattedTickers = formatTickers(tickers);

    try {
      const data = await fetchTickerData(formattedTickers);
      onData(data);
    } catch (err) {
      setTickerHelperText('Error loading chart data');
    }
    setFetching(false);
  };

  const handleOnTickerInput: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTickers(target.value);
    setTickerHelperText(validateTickers(target.value));
  };

  return (
    <TickerForm onSubmit={handleOnFormSubmit}>
      <TextField
        label='Enter stock tickers'
        placeholder='e.g., AAPL, GOOG'
        helperText={tickerHelperText}
        error={!!tickerHelperText}
        onInput={handleOnTickerInput}
        required
      />
      <Button type='submit' disabled={fetching}>
        {fetching && (
          <>
            <CircularProgress size={16} />{' '}
          </>
        )}
        Update
      </Button>
    </TickerForm>
  );
};
