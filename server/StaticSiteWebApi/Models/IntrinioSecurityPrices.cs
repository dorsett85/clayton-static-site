using System.Collections.Generic;

namespace StaticSiteWebApi.Models
{
    /// <summary>
    /// This model represents the response we get from Intrinio when fetching
    /// prices for an individual security.
    /// </summary>
    public class IntrinioSecurityPrices
    {
        public IEnumerable<StockPrice> Stock_Prices { get; set; }
        public Security Security { get; set; }
        public string Next_Page { get; set; }
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
        public float Adj_Open { get; set; }
        public float Adj_High { get; set; }
        public float Adj_Low { get; set; }
        public float Adj_Close { get; set; }
        public float Adj_Volume { get; set; }
    }

    public class Security
    {
        public string Id { get; set; }
        public string Company_Id { get; set; }
        public string Stock_Exchange_Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Currency { get; set; }
        public string Ticker { get; set; }
        public string Composite_Ticker { get; set; }
        public string Figi { get; set; }
        public string Composite_Figi { get; set; }
        public string Share_Class_Figi { get; set; }
    }
}