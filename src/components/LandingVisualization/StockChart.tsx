import React, { useEffect, useRef } from 'react';
import { StockChartDto } from '../../types/stockChartDto';
import Highcharts from 'highcharts/highstock';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import { styled } from '@mui/material';

if (typeof window !== 'undefined') {
  highchartsAccessibility(Highcharts);
}

interface StockChartProps {
  data: StockChartDto[];
}

const ChartElement = styled('div')`
  height: 100%;
`;

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

const StockChart: React.FC<StockChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      renderChart(data, chartRef.current);
    }
  }, [data]);

  return <ChartElement ref={chartRef} />;
};

export default StockChart;
