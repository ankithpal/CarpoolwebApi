namespace CarPool.Models
{
    public class BookingRequest : RideDetails
    {
        public int Id { get; set; }
        public int To { get; set; }   
        public int From { get; set; }
        public string Source { get; set; }  
        public string Destination { get; set; }
        public int UserId { get; set; }
        public int NoOfPassenger { get ; set ; }
    }
}
