using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using StaticSiteWebApi.Models;

namespace StaticSiteWebApi.HttpClients
{
    public class IntrinioClient : IIntrinioClient
    {
        private readonly HttpClient _httpClient;

        public IntrinioClient(HttpClient client)
        {
            client.BaseAddress = new Uri("https://api-v2");
            _httpClient = client;
        }

        public async Task<IntrinioSecurityPrices> GetSecurityPrices(string ticker)
        {
            var response = await _httpClient.GetAsync($"/securities/{ticker}/prices");
            response.EnsureSuccessStatusCode();
            using var responseStream = await response.Content.ReadAsStreamAsync();
            return await JsonSerializer.DeserializeAsync
                <IntrinioSecurityPrices>(responseStream);
        }
    }
}