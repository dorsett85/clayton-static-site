import { SeriesXrangeOptions } from 'highcharts';

/**
 * Backend response type when we request stock chart data. We don't actually
 * send back a "type" prop, but extending here to appease HightCharts
 * SeriesXrangeOptions "type" prop (it notes that the property can be runtime
 * undefined).
 */
export interface StockChartDto extends Pick<SeriesXrangeOptions, 'name' | 'type'> {
  /**
   * List of data points for the x and y axes.
   */
  data: { x: number; y: number }[];
}
