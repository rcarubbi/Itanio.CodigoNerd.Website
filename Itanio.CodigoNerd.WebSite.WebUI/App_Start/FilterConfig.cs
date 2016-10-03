using System.Web;
using System.Web.Mvc;

namespace Itanio.CodigoNerd.WebSite.WebUI
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
