using System.ComponentModel.DataAnnotations;

namespace CarPool.Models
{
    public class Location
    {
        [Key]
        public int Id { get; set ; } 
        public int LoationId { get; set; }
        public string Name { get; set ; }
        public int Occupency { get; set; }
    }
}
 