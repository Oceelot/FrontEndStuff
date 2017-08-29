using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FrontEndTasks.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult WithoutFlexBox()
        {
            return View();
        }

        public ActionResult WithFlexBox()
        {
            return View();
        }
    }
}