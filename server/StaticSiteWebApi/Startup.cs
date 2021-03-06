using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using StaticSiteWebApi.HttpClients;
using StaticSiteWebApi.Models;
using StaticSiteWebApi.Transforms;

namespace StaticSiteWebApi
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder => { builder.WithOrigins("http://localhost:8000"); });
            });
            services.AddControllers();
            services.AddHttpClient<IIntrinioClient, IntrinioClient>();
            services.AddTransient<IStockChartDtoTransform, StockChartDtoTransform>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // TODO The hardcoded production path is pretty ugly, maybe move to config 
            var staticFolderPath = env.IsDevelopment()
                ? Path.Combine(Directory.GetCurrentDirectory(), "../../public")
                : "/var/www/clayton-static-site/public";
            
            app.UseFileServer(new FileServerOptions()
            {
                FileProvider = new PhysicalFileProvider(staticFolderPath),
                RequestPath = new PathString("")
            });

            app.UseCors();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => endpoints.MapControllers());
        }
    }
}