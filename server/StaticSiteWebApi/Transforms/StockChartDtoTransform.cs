using System;
using System.Linq;
using StaticSiteWebApi.Models;

namespace StaticSiteWebApi.Transforms
{
    public class StockChartDtoTransform : IStockChartDtoTransform
    {
        public StockChartDto Create(IntrinioSecurityPrices securityPrices)
        {
            var stockChartDto = new StockChartDto();
            stockChartDto.Name = securityPrices.Security.Ticker;
            stockChartDto.Data = securityPrices.StockPrices.Reverse().Select(security =>
            {
                // Convert the date to Unix timestamp
                var unixTimestamp = DateTimeOffset.Parse(security.Date).ToUnixTimeMilliseconds();
                float[] dataPoint = {unixTimestamp, security.Close};
                return dataPoint;
            });
            return stockChartDto;
        }
    }
}