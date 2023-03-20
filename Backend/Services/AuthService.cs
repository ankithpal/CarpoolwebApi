using CarPool.Interfaces;
using CarPool.Models;

namespace CarPool.Services
{
    public class AuthService : IAuthService
    {
        private  CarPoolContext _context;
        private ITokenGeneration _tokenGenerationService;
        public AuthService(CarPoolContext context, ITokenGeneration tokenGenerationService)
        {
            this._context = context;
            _tokenGenerationService = tokenGenerationService;
        }
        public bool SignUp(User user )
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return true;
        }
        public string  Login(LoginRequest requestDetails)
        {
            Console.WriteLine("reached here");
            var user = _context.Users.Where(u=>u.Email == requestDetails.Email  && u.Password == requestDetails.Password).FirstOrDefault();
            if (user == null) {return null;}
            string responseToken  =  _tokenGenerationService.GenerateToken(user);
            return responseToken ;
        }
    }
}
