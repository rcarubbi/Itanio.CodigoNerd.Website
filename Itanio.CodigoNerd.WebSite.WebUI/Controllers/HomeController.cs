using Itanio.CodigoNerd.WebSite.WebUI.Models;
using SmartLMS.DAL;
using SmartLMS.Dominio;
using System.Linq;
using System.Web.Mvc;

namespace Itanio.CodigoNerd.WebSite.WebUI.Controllers
{
    public class HomeController : Controller
    {
         

        public ActionResult Index()
        {
            IContexto contexto = new Contexto();
            SmartLMS.Dominio.Repositorios.RepositorioAssunto repo = new SmartLMS.Dominio.Repositorios.RepositorioAssunto(contexto);
            var assuntos = repo.ListarAssuntos("", "Nome", 1).Entities.Union(repo.ListarAssuntos("", "Nome", 2).Entities);
            return View(new HomeViewModel { AssuntosDestaque = AssuntoDestaqueViewModel.FromEntityList(assuntos.Take(12)) });

        }

        public ActionResult Busca(string termo = "") {
            IContexto contexto = new Contexto();
            SmartLMS.Dominio.Servicos.ServicoBuscaContextual servico = new SmartLMS.Dominio.Servicos.ServicoBuscaContextual(contexto, null);
            var resultados = servico.Pesquisar(termo, 1, 20);
            ViewBag.Termo = termo;
            return View(resultados);
        }
    }
}