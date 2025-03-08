using Blog_Business.Interfaces;
using Blog_Entities.DataModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blog_WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginApiController : BaseApiController
    {
        private readonly IKullaniciService _Kullanici;
        public LoginApiController(IKullaniciService Kullanici)
        {
            _Kullanici = Kullanici;
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Giris([FromBody] KullaniciDataModel model)
        {
            var kullanici = _Kullanici.Giris(model);

            if (kullanici.Id > 0)
            {
                kullanici.JwtToken = GenerateJwtToken(kullanici);
            }

            return Ok(kullanici);
        }
    }
}
