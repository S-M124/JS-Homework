using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BooksApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();
            var app = builder.Build();
            app.MapControllers();
            app.Run();
        }
    }

    public class Book
    {
        public string Author { get; set; }
        public string Title { get; set; }
    }

    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {
        private static List<Book> books = new List<Book>
        {
            new Book { Author = "Author1", Title = "Title1" },
            new Book { Author = "Author2", Title = "Title2" }
        };

        [HttpGet]
        public ActionResult<List<Book>> GetAllBooks()
        {
            return books;
        }

        [HttpGet("{index}")]
        public ActionResult<Book> GetBookByIndex(int index)
        {
            if (index < 0 || index >= books.Count)
                return NotFound();
            return books[index];
        }

        [HttpGet("search")]
        public ActionResult<List<Book>> GetBooksByAuthorAndTitle([FromQuery] string author, [FromQuery] string title)
        {
            var filteredBooks = books.FindAll(b => b.Author == author && b.Title == title);
            return filteredBooks;
        }

        [HttpPost]
        public ActionResult AddBook([FromBody] Book newBook)
        {
            books.Add(newBook);
            return CreatedAtAction(nameof(GetAllBooks), new { });
        }
    }
}