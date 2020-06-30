using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace StaticSiteWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StockChartController : ControllerBase
    {
        private readonly ILogger<StockChartController> _logger;

        public StockChartController(ILogger<StockChartController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{tickers}")]
        public IEnumerable<string> Get(string tickers)
        {
            System.Console.WriteLine(ControllerContext.ActionDescriptor);
            System.Console.WriteLine(tickers);
            return new []{ tickers };
        }
    }
}