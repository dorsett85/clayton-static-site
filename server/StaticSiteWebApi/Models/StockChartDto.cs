using System.Collections.Generic;

namespace StaticSiteWebApi.Models
{
    public class StockChartDto
    {
        /// <summary>
        /// Name represented as a stock ticker symbol (e.g., AAPL)
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// List of data points
        /// </summary>
        public IEnumerable<DataPoint> Data { get; set; }
    }

    public class DataPoint
    {
        /// <summary>
        /// X-axis value
        /// </summary>
        public float X { get; set; }
        /// <summary>
        /// Y-axis value
        /// </summary>
        public float Y { get; set; }
    }
}