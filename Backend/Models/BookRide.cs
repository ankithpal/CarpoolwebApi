using System.ComponentModel.DataAnnotations;

namespace CarPool.Models
{
    public class BookRide
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int OfferRideId { get; set; }
        public int  SourceId { get; set; }
        public int DestinationId { get; set;  }
        public string Source { get; set; }
        public string Destination { get; set; } 
        public DateTime InTime { get; set; }
        public DateTime OutTime { get; set; }
        public float Charge { get; set; }   
        
    }
}
