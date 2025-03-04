using Blog_DataAccess.DBContext;
using Blog_DataAccess.DBModels;
using Blog_DataAccess.EFInterfaces;
using Blog_DataAccess.GenericRepository.Repository;
using Blog_Entities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Blog_DataAccess.EFOperations
{
    public class EFKullanici : GenericRepository<Kullanici>, IEFKullaniciRepository
    {
        public EFKullanici(BlogDbContext BlogContext) : base(BlogContext) { }

        public Kullanici Giris(KullaniciDataModel model)
        {
            using (BlogDbContext db = new BlogDbContext())
            {
                var kullanici = db.Kullanicis.FirstOrDefault(i => i.Sifre == model.Sifre && i.KullaniciAdi == model.KullaniciAdi);

                if (kullanici != null)
                    return kullanici;

                return new Kullanici();
            }
        }
    }
}
