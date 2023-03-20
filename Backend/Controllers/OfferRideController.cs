using CarPool.Interfaces;
using CarPool.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarPool.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferRideController : ControllerBase
    {
        IOfferRideService _OfferRideService;
        public OfferRideController(IOfferRideService offerRideService)
        {
            this._OfferRideService = offerRideService;
        }
        [HttpPost("/registervehicle")]
        public async Task VehiclePost(Vehicle vehicle)
        {
             _OfferRideService.RegisterVehicle(vehicle);
        }

        [HttpPost("/offerride")]
        public async Task OfferRideDetailsPost(RideDetails rideDetails)
        {
            _OfferRideService.OfferRide(rideDetails);
        }
    }
}
