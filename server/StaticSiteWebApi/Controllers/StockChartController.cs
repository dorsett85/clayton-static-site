using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StaticSiteWebApi.HttpClients;
using StaticSiteWebApi.Models;
using StaticSiteWebApi.Transforms;

namespace StaticSiteWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StockChartController : ControllerBase
    {
        private readonly ILogger<StockChartController> _logger;
        private readonly IIntrinioClient _intrinioClient;
        private readonly IStockChartDtoTransform _stockChartDtoTransform;

        public StockChartController(ILogger<StockChartController> logger, IIntrinioClient client,
            IStockChartDtoTransform transform)
        {
            _logger = logger;
            _intrinioClient = client;
            _stockChartDtoTransform = transform;
        }

        [HttpGet("{tickers=PG,IBM,DIS}")]
        public async Task<StockChartDto[]> Get(string tickers)
        {
            // Tickers will come in as a string of symbols separated by commas
            // (if more than one), so we'll split them into an array to make
            // individual Intrinio requests for each one.
            string[] tickerList = tickers.Split(',');

            // Create a list of tasks that each resolve to our StockChartDto
            List<Task<StockChartDto>> stockData = new List<Task<StockChartDto>>();

            foreach (var ticker in tickerList)
            {
                Task<StockChartDto> stockDataTask = _intrinioClient.GetSecurityPrices(ticker).ContinueWith(data =>
                    _stockChartDtoTransform.Create(data.Result)
                );
                stockData.Add(stockDataTask);
            }

            return await Task.WhenAll(stockData);
        }
    }
}