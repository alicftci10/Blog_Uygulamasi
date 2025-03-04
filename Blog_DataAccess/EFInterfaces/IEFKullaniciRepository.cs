using Blog_DataAccess.DBModels;
using Blog_DataAccess.GenericRepository.Interfaces;
using Blog_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog_DataAccess.EFInterfaces
{
    public interface IEFKullaniciRepository : IRepository<Kullanici>
    {
        Kullanici Giris(KullaniciDataModel model);
    }
}
