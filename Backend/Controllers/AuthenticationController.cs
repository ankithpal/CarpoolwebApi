using CarPool.Models;
using CarPool.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;

namespace CarPool.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        IAuthService _authService;
        public AuthenticationController(IAuthService authService )
        {
            this._authService = authService;
        }
            
        [HttpPost("/signup")]
        public async Task<IActionResult> SignUp(User user)
        {
            bool res =   _authService.SignUp(user);
            if(!res)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost("/login")]
        public async Task<IActionResult> Login(LoginRequest requestDetails)
        {
            string  userToken  = _authService.Login(requestDetails);
            if (userToken != null)
            {
                return Ok(userToken);
            }
            return NotFound();
        }
    }
}
