using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    // Static "database" of user names
    private static readonly List<string> _users = new List<string>
    {
        "Alice",
        "Bob Bobsky",
        "John Doe",
        "Mark"
    };

    // GET: /users
    [HttpGet]
    public ActionResult<IEnumerable<string>> GetUsers()
    {
        return Ok(_users);
    }

    // GET: /users/{name}
    [HttpGet("{name}")]
    public ActionResult<string> GetUser(string name)
    {
        var user = _users.FirstOrDefault(u => u.Equals(name, System.StringComparison.OrdinalIgnoreCase));

        if (user == null)
        {
            return NotFound($"User with name '{name}' not found.");
        }

        return Ok(user);
    }
}