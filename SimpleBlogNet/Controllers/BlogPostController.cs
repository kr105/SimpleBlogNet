using Microsoft.AspNetCore.Mvc;
using SimpleBlogNet.Db;

namespace SimpleBlogNet.Controllers
{
    [ApiController]
    [Route("api/posts")]
    public class BlogPostController : ControllerBase
    {
        private readonly ILogger<BlogPostController> _logger;
        private readonly IConfiguration _configuration;
        private readonly SimpleBlogContext _dataContext;

        public BlogPostController(ILogger<BlogPostController> logger, IConfiguration configuration, SimpleBlogContext context)
        {
            _logger = logger;
            _configuration = configuration;
            _dataContext = context;
        }

        [HttpGet]
        public IEnumerable<BlogPost> Get()
        {
            return _dataContext.Post.ToList();
        }
    }
}