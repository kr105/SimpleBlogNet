
using Microsoft.EntityFrameworkCore;
using SimpleBlogNet.Db;

namespace SimpleBlogNet
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.


            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      // Required for development setup
                                      policy.WithOrigins("http://localhost:5173");
                                  });
            });

            builder.Services.AddControllersWithViews();


            // Database
            var connectionString = builder.Configuration.GetConnectionString("ConnStr");

            if (connectionString == null)
            {
                Console.WriteLine("Failed to fetch connectionString");
                connectionString = "";
            }

            builder.Services.AddDbContext<SimpleBlogContext>(options => options.UseMySQL(connectionString));


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                Console.WriteLine("Production env detected");

                Console.WriteLine($"Setting {app.Configuration["BasePath"]} base path");
                app.UsePathBase(app.Configuration["BasePath"]);
            }

            app.UseStaticFiles();
            app.UseRouting();

            app.UseCors(MyAllowSpecificOrigins);

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}