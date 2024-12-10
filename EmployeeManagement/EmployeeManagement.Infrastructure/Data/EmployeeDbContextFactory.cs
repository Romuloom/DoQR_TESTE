using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace EmployeeManagement.Infrastructure.Data
{
    public class EmployeeDbContextFactory : IDesignTimeDbContextFactory<EmployeeDbContext>
    {
        public EmployeeDbContext CreateDbContext(string[] args)
        {

            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();


            var optionsBuilder = new DbContextOptionsBuilder<EmployeeDbContext>();
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            optionsBuilder.UseNpgsql(connectionString);

            return new EmployeeDbContext(optionsBuilder.Options);
        }
    }
}
