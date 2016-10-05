using SmartLMS.Dominio.Entidades.Conteudo;
using System.Collections.Generic;

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
