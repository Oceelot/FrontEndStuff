using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FrontEndTasks.Startup))]
namespace FrontEndTasks
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
