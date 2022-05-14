using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentManagement.Models;

namespace StudentManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new Todo[]
            {
                new Todo { Id = 1, Title = "Shopping", IsComplete = true, Priority = Random.Shared.Next(1, 20)},
                new Todo { Id = 2, Title = "Coding", IsComplete = false, Priority = Random.Shared.Next(1, 20)},
                new Todo { Id = 3, Title = "Running", IsComplete = false, Priority = Random.Shared.Next(1, 20)},
                new Todo { Id = 4, Title = "Eating", IsComplete = false, Priority = Random.Shared.Next(1, 20)},
            });
        }
    }
}
