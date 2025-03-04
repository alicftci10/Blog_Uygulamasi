using Blog_DataAccess.DBModels;
using Blog_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog_Business.Interfaces
{
    public interface IKullaniciService
    {
        KullaniciDataModel Giris(KullaniciDataModel model);

        Kullanici GetId(int pId);

        int Add(KullaniciDataModel item);

        int Update(KullaniciDataModel item);

        Kullanici Delete(int pId);
    }
}
