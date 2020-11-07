using System.Web;
 using System.Web.Hosting;
using System.Web.Optimization;

namespace School_Managment
{
    public class BundleConfig
    {
        // Pour plus d'informations sur le regroupement, visitez https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/assets/vendor").Include(
                      "~/Content/assets/vendor/jquery/jquery.min.js",
                      /*"~/Content/vendors/jquery-ui/jquery-ui.min.js",*/
                      "~/Content/assets/vendor/bootstrap/js/popper.min.js",
                      "~/Content/assets/vendor/bootstrap/js/bootstrap.min.js",
                      "~/Content/assets/vendor/stacked-menu/stacked-menu.min.js",
                      "~/Content/assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
                      "~/Content/assets/vendor/flatpickr/flatpickr.min.js",
                      "~/Content/assets/vendor/easy-pie-chart/jquery.easypiechart.min.js",
                      "~/Content/assets/javascript/main.min.js",
                      "~/Content/assets/vendor/pace/pace.min.css",
                      "~/Content/assets/vendor/bootstrap/css/bootstrap.min.css",
                      "~/Content/assets/vendor/open-iconic/css/open-iconic-bootstrap.min.css",
                      "~/Content/assets/vendor/fontawesome/css/fontawesome.all.css",
                      "~/Content/assets/vendor/flatpickr/flatpickr.min.css",
                      "~/Content/assets/stylesheets/main.min.css",
                      "~/Content/assets/stylesheets/custom.css"));

        }
    }
}
