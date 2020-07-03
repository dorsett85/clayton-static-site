using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace StaticSiteWebApi.Models
{
    /// <summary>
    /// This model represents the response we get from Intrinio when fetching
    /// prices for an individual security.
    /// </summary>
    public class IntrinioSecurityPrices
    {
        [JsonPropertyName("stock_prices")]
        public IEnumerable<StockPrice> StockPrices { get; set; }
        public Security Security { get; set; }
        [JsonPropertyName("next_page")]
        public string NextPage { get; set; }
    }

    public class StockPrice
    {
        public string Date { get; set; }
        public bool Intraperiod { get; set; }
        public string Frequency { get; set; }
        public float Open { get; set; }
        public float High { get; set; }
        public float Low { get; set; }
        public float Close { get; set; }
        public float Volume { get; set; }
        [JsonPropertyName("adj_open")]
        public float AdjOpen { get; set; }
        [JsonPropertyName("adj_high")]
        public float AdjHigh { get; set; }
        [JsonPropertyName("adj_low")]
        public float AdjLow { get; set; }
        [JsonPropertyName("adj_close")]
        public float AdjClose { get; set; }
        [JsonPropertyName("adj_volume")]
        public float AdjVolume { get; set; }
    }

    public class Security
    {
        public string Id { get; set; }
        [JsonPropertyName("company_id")]
        public string CompanyId { get; set; }
        [JsonPropertyName("stock_exchange_id")]
        public string StockExchangeId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Currency { get; set; }
        public string Ticker { get; set; }
        [JsonPropertyName("composite_ticker")]
        public string CompositeTicker { get; set; }
        public string Figi { get; set; }
        [JsonPropertyName("composite_figi")]
        public string CompositeFigi { get; set; }
        [JsonPropertyName("share_class_figi")]
        public string ShareClassFigi { get; set; }
    }
}