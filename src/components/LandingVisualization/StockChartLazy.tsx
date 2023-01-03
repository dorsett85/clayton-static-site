import React, { Suspense } from 'react';
import { StockChartDto } from '../../types/stockChartDto';
import { styled } from '@mui/material';

const StockChart = React.lazy(() => import('./StockChart'));

interface StockChartLazyProps {
  data?: StockChartDto[];
}

const ChartContainer = styled('div')(({ theme }) => ({
  height: 400,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

export const StockChartLazy = React.forwardRef<HTMLDivElement, StockChartLazyProps>(
  ({ data }, ref) => {
    return (
      <ChartContainer ref={ref}>
        <Suspense fallback={null}>{data && <StockChart data={data} />}</Suspense>
      </ChartContainer>
    );
  }
);
StockChartLazy.displayName = 'StockChartLazy';
