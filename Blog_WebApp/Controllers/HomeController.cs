using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Blog_WebApp.Controllers
{
    public class HomeController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
