using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
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
            client.BaseAddress = new Uri("https://api-v2.intrinio.com/");
            client.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", "OmFjOWM3MDJmNWJmMzQ0ZDlhNTE2NWVlMzdiYzJhZDc5");
            _httpClient = client;
        }

        public async Task<IntrinioSecurityPrices> GetSecurityPrices(string ticker)
        {
            HttpResponseMessage response = await _httpClient.GetAsync($"/securities/{ticker}/prices?page_size=300");
            response.EnsureSuccessStatusCode();
            Stream responseStream = await response.Content.ReadAsStreamAsync();
            return await JsonSerializer.DeserializeAsync<IntrinioSecurityPrices>(responseStream,
                new JsonSerializerOptions()
                {
                    PropertyNameCaseInsensitive = true
                });
        }
    }
}