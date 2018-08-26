using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiApp.Helper;
using ApiApp.Request;
using ApiApp.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApiApp.Controllers
{
    [Route("token")]
    [AllowAnonymous]
    public class TokenController : Controller
    {
        public TokenController()
        {
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LoginRequest inputModel)
        {



            if (!(inputModel.Username == "test" && inputModel.Password == "1234"))
            {
                return Unauthorized();
            }

            var result = new LoginResponse()
            {
                Id = Guid.NewGuid().ToString(),
                Name = "test",
                Surname = "test",
                UserName = "test"
            };
            var token = new JwtTokenBuilder()
                .AddSecurityKey(JwtSecurityKey.Create("fiver-secret-key"))
                .AddSubject($"{result.Name} {result.Surname}")
                .AddIssuer("Fiver.Security.Bearer")
                .AddAudience("Fiver.Security.Bearer")
                .AddClaim("UserName", result.UserName)
                .AddClaim("MembershipId", result.Id)
                //.AddClaim("roles", string.Join(",", result.Roles))
                .AddExpiry(60)
                .Build();

            return Ok(token);
        }
    }
}