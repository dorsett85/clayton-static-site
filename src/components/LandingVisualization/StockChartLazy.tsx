import React, { Suspense } from 'react';
import { StockChartDto } from '../../types/stockChartDto';
import { ChartContainer } from './utils';

const StockChart = React.lazy(() => import('./StockChart'));

interface StockChartLazyProps {
  data?: StockChartDto[];
  chartContainerRef: React.Ref<HTMLDivElement>;
}

export const StockChartLazy: React.FC<StockChartLazyProps> = ({
  data,
  chartContainerRef
}) => {
  return (
    <Suspense fallback={<ChartContainer />}>
      {data && <StockChart data={data} chartContainerRef={chartContainerRef} />}
    </Suspense>
  );
};
