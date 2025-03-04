using Blog_Business.Interfaces;
using Blog_DataAccess.DBModels;
using Blog_DataAccess.EFInterfaces;
using Blog_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog_Business.Managers
{
    public class KullaniciManager : BaseManager, IKullaniciService
    {
        private readonly IEFKullaniciRepository _KullaniciRepository;
        public KullaniciManager(IEFKullaniciRepository KullaniciRepository)
        {
            _KullaniciRepository = KullaniciRepository;
        }

        public KullaniciDataModel Giris(KullaniciDataModel model)
        {
            Kullanici kul = _KullaniciRepository.Giris(model);

            model.Id = kul.Id;
            model.Ad = kul.Ad;
            model.Soyad = kul.Soyad;
            model.KullaniciAdi = kul.KullaniciAdi;
            model.Sifre = kul.Sifre;
            model.CreatedAt = kul.CreatedAt;
            model.CreatedBy = kul.CreatedBy;

            return model;
        }

        private Kullanici GetDataModel(KullaniciDataModel model)
        {
            Kullanici item = new Kullanici();

            item.Ad = model.Ad;
            item.Soyad = model.Soyad;
            item.KullaniciAdi = model.KullaniciAdi;
            item.Sifre = model.Sifre;
            item.CreatedAt = DateTime.Now;
            if (model.CreatedBy != null)
            {
                item.CreatedBy = model.CreatedBy;
            }

            if (model.Id > 0)
            {
                item.Id = model.Id;
            }

            return item;
        }

        public Kullanici GetId(int pId)
        {
            return _KullaniciRepository.GetSelect(pId);
        }

        public int Add(KullaniciDataModel item)
        {
            return _KullaniciRepository.Add(GetDataModel(item)).Id;
        }

        public int Update(KullaniciDataModel item)
        {
            return _KullaniciRepository.Update(GetDataModel(item)).Id;
        }

        public Kullanici Delete(int pId)
        {
            return _KullaniciRepository.Delete(pId);
        }
    }
}
