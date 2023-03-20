using CarPool.Interfaces;
using CarPool.Models;
using Microsoft.EntityFrameworkCore;

namespace CarPool.Services
{
    public class BookRideService : IBookRideService
    {
        private CarPoolContext _Context;
        public BookRideService(CarPoolContext context)
        {
            this._Context = context ;
        }
        public List<RideDetails> GetAvailableRides(RideRequest rideRequest)
        {
            List<RideDetails> availableRides = new List<RideDetails>();
            try
            {
                var rideDetailsList = _Context.RideDetails.Where(r => r.Date == rideRequest.Date).Include("Stops").Include("Occupencies");
                Console.WriteLine("ride count "  + rideDetailsList.Count());
                foreach (var ride in rideDetailsList)
                {
                    string  fromLocation = null;
                    string  toLocation = null;

                    List<Location> stops = ride.Stops.ToList();
                    int seatOccupied = 0;
                    for (int i = 0; i < stops.Count(); i++)
                    {
                        if (stops[i].Name == rideRequest.SourceName)
                        {
                            fromLocation = stops[i].Name;
                        }
                        else if (fromLocation != null && stops[i].Name == rideRequest.DestinationName)
                        {
                            toLocation = stops[i].Name;
                            break;
                        } 
                        if (fromLocation != null)
                        {
                            seatOccupied = Math.Max(seatOccupied, ride.Stops[i].Occupency);
                        }
                    }
                    if (fromLocation != null && toLocation != null  && (ride.Capacity - seatOccupied) >= rideRequest.NoOfPassenger)
                    {
                        availableRides.Add(ride);
                    }
                }
                return availableRides;
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;    
            }
        }
        public void BookRide(BookingRequest bookingRequest)
        {
            try
            {
                BookRide bookRide = new BookRide();
                bookRide.SourceId = bookingRequest.From;
                bookRide.DestinationId = bookingRequest.To;
                bookRide.UserId = bookingRequest.UserId;
                bookRide.Source = bookingRequest.Source;
                bookRide.Destination = bookingRequest.Destination;
                bookRide.Charge = bookingRequest.FairPerKm;
                bookRide.OfferRideId = bookingRequest.OwnerId;

                bool flag = false;
                for (int i = 0; i < bookingRequest.Stops.Count; i++)
                {   
                    if (bookingRequest.Stops[i].Name == bookingRequest.Destination) { break; }
                    if (bookingRequest.Stops[i].Name == bookingRequest.Source)
                    {   
                        flag = true;
                        bookingRequest.Stops[i].Occupency += bookingRequest.NoOfPassenger;
                        continue;
                    }
                    if (flag == true)
                    {
                        bookingRequest.Stops[i].Occupency += bookingRequest.NoOfPassenger;
                    }
                }
                RideDetails rideDetail = _Context.RideDetails.Where(r => r.OwnerId == bookingRequest.OwnerId).FirstOrDefault();
                if (rideDetail == null) { return; }
                _Context.RideDetails.Update(rideDetail);
                _Context.SaveChanges();

                _Context.BookRides.Add(bookRide);
                _Context.SaveChanges();

            }catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

    //    public float  DistanceTravelled(BookingRequest bookingRequest)
    //    {
    //        float distance = 0;
    //        try
    //        {
    //            float destinationDistance = 0;
    //            float sourceDistance = 0;
    //            for (int i = 0; i < bookingRequest.Stops.Count; i++)
    //            {
    //                if (bookingRequest.Stops[i].LoationId == bookingRequest.From)
    //                {
    //                    sourceDistance = bookingRequest.Occupencies[i].DistanceFromSource;
    //                }
    //                if (bookingRequest.Stops[i].LoationId == bookingRequest.To)
    //                {
    //                    destinationDistance = bookingRequest.Occupencies[i].DistanceFromSource;
    //                }
    //            }

    //            distance = sourceDistance - destinationDistance;
    //            return distance;
    //        }
    //        catch(Exception ex)
    //        {
    //            Console.WriteLine(ex.Message);
    //            return 0;
    //        }
    //    }
    }
}