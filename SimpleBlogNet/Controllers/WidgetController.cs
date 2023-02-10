using Microsoft.AspNetCore.Mvc;
using SimpleBlogNet.Db;

namespace SimpleBlogNet.Controllers
{
    [ApiController]
    [Route("api/widgets")]
    public class WidgetController : ControllerBase
    {
        private readonly ILogger<WidgetController> _logger;
        private readonly IConfiguration _configuration;
        private readonly SimpleBlogContext _dataContext;

        public WidgetController(ILogger<WidgetController> logger, IConfiguration configuration, SimpleBlogContext context)
        {
            _logger = logger;
            _configuration = configuration;
            _dataContext = context;
        }

        [HttpGet]
        public IEnumerable<Widget> Get()
        {
            return _dataContext.Widget.ToList();
        }
    }
}