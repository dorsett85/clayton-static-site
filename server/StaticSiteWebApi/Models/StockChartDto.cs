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
        /// A data list that contains array items of length 2. The first index
        /// in the sub-array contains a date (represented as milliseconds since
        /// Unix Epoch) and the second index is a closing price value in
        /// dollars.
        /// </summary>
        public IEnumerable<float[]> Data { get; set; }
    }
}