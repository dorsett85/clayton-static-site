import React, { useEffect, useRef, useState } from 'react';
import { StockChartDto } from '../../types/stockChartDto';
import { fetchTickerData } from './utils';
import { StockChartForm } from './StockChartForm';
import { StockChartLazy } from './StockChartLazy';

export const StockChartWidget: React.FC = () => {
  const [stockChartData, setStockChartData] = useState<StockChartDto[]>();
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

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
          fetchTickerData().then(setStockChartData).catch(console.error);
        }
      });
      observer.observe(chartContainerEl);
    }
  }, []);

  return (
    <>
      <StockChartForm onData={setStockChartData} />
      <StockChartLazy data={stockChartData} ref={chartContainerRef} />
    </>
  );
};
