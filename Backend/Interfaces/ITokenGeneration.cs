using CarPool.Models;

namespace CarPool.Interfaces
{
    public interface ITokenGeneration
    {
        public string GenerateToken(User user);
    }
}
