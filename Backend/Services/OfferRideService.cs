using CarPool.Interfaces;
using CarPool.Models;
namespace CarPool.Services
{
    public class OfferRideService : IOfferRideService
    {

        private CarPoolContext _Context ; 
        public OfferRideService(CarPoolContext context)
        {
            this._Context = context;
        }
        public void RegisterVehicle(Vehicle vehicle)
        {
            _Context.Vehicles.Add(vehicle);
            _Context.SaveChanges();
        }
        public void OfferRide(RideDetails rideDetails)
        {
            _Context.RideDetails.Add(rideDetails);
            _Context.SaveChanges();
        }

    }
}

