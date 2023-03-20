using CarPool.Interfaces;
using CarPool.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarPool.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookRideController : ControllerBase
    {

        IBookRideService _bookRide; 

        public BookRideController(IBookRideService bookRide)
        {
            _bookRide = bookRide;
        }
        [HttpPost("/getavailableride")]
       
        public async Task<IActionResult> GetAvailableRide(RideRequest rideRequest)
        {
            var response = _bookRide.GetAvailableRides(rideRequest);
            if(response == null) { return NotFound(); }
            return Ok(response);
        }

        [HttpPost("/bookride")]

        public void BookRide(BookingRequest bookingRequest)
        {
            _bookRide.BookRide(bookingRequest);
        }
    }
}
