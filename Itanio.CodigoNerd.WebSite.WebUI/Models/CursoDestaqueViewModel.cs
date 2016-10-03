using SmartLMS.Dominio.Entidades.Conteudo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Itanio.CodigoNerd.WebSite.WebUI.Models
{
    public class AssuntoDestaqueViewModel
    {
        public string Nome { get; set; }

        public static IEnumerable<AssuntoDestaqueViewModel> FromEntityList(IEnumerable<Assunto> lista)
        {
            foreach (var item in lista)
            {
                yield return FromEntity(item);
            }
        }

        private static AssuntoDestaqueViewModel FromEntity(Assunto item)
        {
            return new AssuntoDestaqueViewModel
            {
                Nome = item.Nome
            };
        }
    }
}
