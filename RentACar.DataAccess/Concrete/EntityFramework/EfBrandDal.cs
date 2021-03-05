﻿using System.Collections.Generic;
using RentACar.Core.DataAccess;
using RentACar.Core.DataAccess.EntityFramework;
using RentACar.DataAccess.Abstract;
using RentACar.Entities.Concrete;

namespace RentACar.DataAccess.Concrete.EntityFramework
{
    public class EfBrandDal:EfEntityRepositoryBase<Brand,RentACarContext>,IBrandDal
    {
        public void AddRange(List<Brand> brands)
        {
            using var context = new RentACarContext();
            context.AddRange(brands);
        }
    }
}
