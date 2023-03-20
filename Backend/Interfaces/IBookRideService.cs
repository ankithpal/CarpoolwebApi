using CarPool.Models;
using CarPool.Services;

namespace CarPool.Interfaces
{
    public interface IBookRideService
    {
        List<RideDetails> GetAvailableRides(RideRequest rideRequest);
        void BookRide(BookingRequest bookingRequest);
    }
}
