using CarPool.Models;

namespace CarPool.Interfaces
{
    public interface IAuthService
    {
        public bool SignUp(User user);
        public string  Login(LoginRequest requestDetails);

    }
}
