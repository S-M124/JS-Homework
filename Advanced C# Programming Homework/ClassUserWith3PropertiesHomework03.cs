using System;
using System.Collections.Generic;
using System.Linq;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
}

public static class UserDatabase
{
    private static List<User> users = new List<User>
    {
        new User { Id = 1, Name = "Alice", Age = 30 },
        new User { Id = 2, Name = "Bob", Age = 25 },
        new User { Id = 3, Name = "Charlie", Age = 35 }
    };

    public static List<User> SearchById(int id)
    {
        return users.Where(u => u.Id == id).ToList();
    }

    public static List<User> SearchByName(string name)
    {
        return users.Where(u => u.Name.Equals(name, StringComparison.OrdinalIgnoreCase)).ToList();
    }

    public static List<User> SearchByAge(int age)
    {
        return users.Where(u => u.Age == age).ToList();
    }
}

internal class Program
{
    private static void Main(string[] args)
    {
        var userById = UserDatabase.SearchById(1);
        var userByName = UserDatabase.SearchByName("Bob");
        var userByAge = UserDatabase.SearchByAge(30);
    }
}