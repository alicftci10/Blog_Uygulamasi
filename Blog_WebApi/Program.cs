using Blog_Business.Interfaces;
using Blog_Business.Managers;
using Blog_DataAccess.DBContext;
using Blog_DataAccess.EFInterfaces;
using Blog_DataAccess.EFOperations;
using Blog_DataAccess.GenericRepository.Interfaces;
using Blog_DataAccess.GenericRepository.Repository;
using Blog_Entities.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Threading;

namespace Blog_WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            #region AddCors request

            builder.Services.AddCors(options => options.AddPolicy("_guvenliSiteler", builder =>
            {
                builder.WithOrigins("*").AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            }));

            #endregion

            #region JWT Token - Microsoft.AspNetCore.Authentication.JwtBearer

            var key = Encoding.UTF8.GetBytes("UCi9U2H{53(1RePt{Cwc8H9B>5q%rHkS");

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(o =>
            {
                o.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = "BlogJWTIssuer",
                    ValidAudience = "BlogJWTAudience",
                    IssuerSigningKey = new SymmetricSecurityKey(key)
                };
            });

            builder.Services.AddAuthorization();

            #endregion

            #region IOS

            builder.Services.AddDbContext<BlogDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            //builder.Services.AddTransient<IHomeService, HomeManager>();

            builder.Services.AddTransient<IKullaniciService, KullaniciManager>();

            builder.Services.AddTransient<IEFKullaniciRepository, EFKullanici>();

            builder.Services.AddTransient(typeof(IRepository<>), typeof(GenericRepository<>));

            #endregion

            #region ConnectionString ve Config bilgileri

            ConfigurationInfo.ConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            ConfigurationInfo.ResimFolderUrl = builder.Configuration["ResimFolderUrl"];

            #endregion

            var app = builder.Build();

            #region UseCors

            app.UseCors("_guvenliSiteler");

            #endregion

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            #region JWT Konfigürasyonu

            app.UseAuthentication();
            app.UseAuthorization();

            #endregion

            app.MapControllers();

            app.Run();
        }
    }
}
