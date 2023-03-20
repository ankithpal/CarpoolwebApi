using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarPool.Models
{
    public class RideDetails
    {
        [Key]
        public int Id { get; set; }
        public int SourceId { get ; set ; }
        public int DestinationId { get ; set ; }
        public string Source { get ; set; } 
        public string Destination { get ; set; }
        public float Distance { get ; set ; }
        public DateTime Date { get; set; }
        public DateTime Intime { get; set; }
        public DateTime OutTime { get; set; }
        public int Capacity { get ; set ; }
        public int FairPerKm { get ; set ; }
        public int OwnerId { get ; set ; }

        [ForeignKey("Vehicle")]
        public string VehicleNumber { get ; set ; }
        public List<Location> Stops { get ; set ; }
        //public List<OccupencyDetail> Occupencies { get; set; }
    }
}
