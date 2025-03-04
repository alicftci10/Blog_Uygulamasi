using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog_Entities.DataModels
{
    public class KullaniciDataModel : BaseDataModel
    {
        public string? Ad { get; set; }

        public string? Soyad { get; set; }

        public string? KullaniciAdi { get; set; }

        public string? Sifre { get; set; }

        public string? FullName { get; set; }

        public string? ErrorMessage { get; set; }

        public string? JwtToken { get; set; }
    }
}
