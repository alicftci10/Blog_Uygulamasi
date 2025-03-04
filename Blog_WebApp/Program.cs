using Blog_Entities.Configuration;

namespace Blog_WebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            #region AddRazorRuntimeCompilation

            builder.Services.AddControllersWithViews().AddRazorRuntimeCompilation();

            #endregion

            #region Request Cors

            builder.Services.AddCors(options => options.AddPolicy("_guvenliSiteler", builder =>
            {
                builder.WithOrigins("*").AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            }));

            #endregion

            #region Session

            builder.Services.AddDistributedMemoryCache();
            builder.Services.AddSession(i =>
            {
                i.IdleTimeout = TimeSpan.FromHours(6);
                i.Cookie.HttpOnly = true;
                i.Cookie.IsEssential = true;
                i.Cookie.Name = "WebApp";
            });

            #endregion

            #region MemoryCache

            builder.Services.AddMemoryCache();

            #endregion

            #region ApiUrl ve MemoryCacheTimeOut

            var apiUrl = builder.Configuration["WebApiUrl"];
            ConfigurationInfo.ApiUrl = apiUrl;
            ConfigurationInfo.MemoryCacheTimeOut = Convert.ToInt32(builder.Configuration["MemoryCacheTimeOut"]);

            #endregion

            var app = builder.Build();

            #region Request UseCors

            app.UseCors("_guvenliSiteler");

            #endregion

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseRouting();

            #region Session kullanılması

            app.UseSession();

            #endregion

            app.UseAuthorization();

            app.MapStaticAssets();
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}")
                .WithStaticAssets();

            app.Run();
        }
    }
}
