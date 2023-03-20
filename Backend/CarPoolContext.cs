using CarPool.Models;
using Microsoft.EntityFrameworkCore;

namespace CarPool
{
    public class CarPoolContext : DbContext
    {
        public CarPoolContext(DbContextOptions<CarPoolContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<BookRide> BookRides { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<RideDetails> RideDetails { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<OccupencyDetail> Occupencies { get; set;}
    }
}
