using System.Collections.Generic;
using System.Linq;
using SmartLMS.Domain.Entities;
using SmartLMS.Domain.Entities.Content;

namespace Itanio.CodigoNerd.WebSite.WebUI.Models
{
    public class AssuntoDestaqueViewModel
    {
        public string Nome { get; set; }

        public static IEnumerable<AssuntoDestaqueViewModel> FromEntityList(IEnumerable<Subject> lista)
        {
            return lista.Select(FromEntity);
        }

        private static AssuntoDestaqueViewModel FromEntity(ISearchResult item)
        {
            return new AssuntoDestaqueViewModel
            {
                Nome = item.Name
            };
        }
    }
}
