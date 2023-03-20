using CarPool.Models;

namespace CarPool.Interfaces
{
    public interface IOfferRideService
    {
        void RegisterVehicle(Vehicle  vehicle);
        void OfferRide(RideDetails rideDetails);
    }
}
