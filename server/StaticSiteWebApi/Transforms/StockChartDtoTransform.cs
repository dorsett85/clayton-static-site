using System;
using System.Linq;
using StaticSiteWebApi.Models;

namespace StaticSiteWebApi.Transforms
{
    public class StockChartDtoTransform : IStockChartDtoTransform
    {
        public StockChartDto Create(IntrinioSecurityPrices securityPrices)
        {
            var stockChartDto = new StockChartDto()
            {
                Name = securityPrices.Security.Ticker,
                Data = securityPrices.StockPrices.Reverse().Select(security =>
                {
                    // Convert the date to Unix timestamp
                    var unixTimestamp = DateTimeOffset.Parse(security.Date).ToUnixTimeMilliseconds();
                    return new DataPoint() { X = unixTimestamp, Y = security.Close};
                })
            };
            return stockChartDto;
        }
    }
}