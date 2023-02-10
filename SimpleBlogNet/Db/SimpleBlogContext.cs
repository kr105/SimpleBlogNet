using Microsoft.EntityFrameworkCore;

namespace SimpleBlogNet.Db
{
    public partial class SimpleBlogContext : DbContext
    {
        public SimpleBlogContext(DbContextOptions options) : base(options) { }
        public DbSet<BlogPost> Post { get; set; }
        public DbSet<Widget> Widget { get; set; }
    }
}
