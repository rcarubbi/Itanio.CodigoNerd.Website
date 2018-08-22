using Itanio.CodigoNerd.WebSite.WebUI.Models;
using SmartLMS.DAL;
using System.Linq;
using System.Web.Mvc;
using SmartLMS.Domain;
using SmartLMS.Domain.Repositories;
using SmartLMS.Domain.Services;

namespace Itanio.CodigoNerd.WebSite.WebUI.Controllers
{
    public class HomeController : Controller
    {
         

        public ActionResult Index()
        {
           // return Redirect("Index.html");

            IContext contexto = new Context();
            var repo = new SubjectRepository(contexto);
            var assuntos = repo.Search("", "Nome", 1).Entities.Union(repo.Search("", "Nome", 2).Entities);
            return View(new HomeViewModel { AssuntosDestaque = AssuntoDestaqueViewModel.FromEntityList(assuntos.Take(12)) });

        }

        public ActionResult Busca(string termo = "") {
            IContext contexto = new Context();
            var servico = new ContextualSearchService(contexto, null);
            var resultados = servico.Search(termo, 1, 20);
            ViewBag.Termo = termo;
            return View(resultados);
        }


      
    }
}