using System.Threading.Tasks;
using StaticSiteWebApi.Models;

namespace StaticSiteWebApi.HttpClients
{
    public interface IIntrinioClient
    {
        public Task<IntrinioSecurityPrices> GetSecurityPrices(string ticker);
    }
}