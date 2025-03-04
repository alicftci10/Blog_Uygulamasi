using Blog_Entities.Configuration;
using Blog_Entities.DataModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace Blog_WebApp.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult LoginEkrani(string p)
        {
            KullaniciDataModel model = new KullaniciDataModel();

            if (p == "logout")
            {
                HttpContext.Session.Clear();
                return RedirectToAction("Index", "Home");
            }

            return View(model);
        }

        [HttpPost]
        public async Task<JsonResult> LoginEkrani([FromBody] KullaniciDataModel model)
        {
            using (HttpClient client = new HttpClient())
            {
                string url = ConfigurationInfo.ApiUrl + "/api/LoginApi/Giris";

                var json = JsonConvert.SerializeObject(model);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await client.PostAsync(url, content);

                var text = response.Content.ReadAsStringAsync();

                if (response.IsSuccessStatusCode)
                {
                    model = JsonConvert.DeserializeObject<KullaniciDataModel>(text.Result);

                    if (model != null && model.Id > 0)
                    {
                        HttpContext.Session.SetString("Kullanici", text.Result);
                    }
                }

                return Json(model);
            }
        }
    }
}
