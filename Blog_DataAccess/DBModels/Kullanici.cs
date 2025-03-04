using System;
using System.Collections.Generic;

namespace Blog_DataAccess.DBModels;

public partial class Kullanici
{
    public int Id { get; set; }

    public string Ad { get; set; } = null!;

    public string Soyad { get; set; } = null!;

    public string KullaniciAdi { get; set; } = null!;

    public string Sifre { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public int? CreatedBy { get; set; }
}
