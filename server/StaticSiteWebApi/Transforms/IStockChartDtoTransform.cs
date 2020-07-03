using StaticSiteWebApi.Models;

namespace StaticSiteWebApi.Transforms
{
    public interface IStockChartDtoTransform
    {
        public StockChartDto Create(IntrinioSecurityPrices securityPrices);
    }
}