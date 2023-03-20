namespace CarPool.Models
{
    public class RideRequest
    {
        public int Id { get; set; }
        public int SourceId { get ; set ; }
        public int DestinationId { get ; set; }

        public string SourceName { get; set; }
        public string DestinationName { get; set; }

        public int UserId { get; set; }
        public DateTime Date { get ; set ; }

        public DateTime InTime { get ; set ; }
        public DateTime OutTime { get ; set ; }
        public int NoOfPassenger { get ; set ; }  
    }
}
