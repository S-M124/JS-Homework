using System;

internal class Program
{
    private static void Main()
    {
        string[] studentsG1 = { "Zdravko", "Petko", "Stanko", "Branko", "Trajko" };
        string[] studentsG2 = { "Ana", "Maja", "Luka", "Marko", "Sara" };

        Console.WriteLine("Enter a group number (1 or 2):");
        int groupNumber = int.Parse(Console.ReadLine());

        if (groupNumber == 1)
        {
            Console.WriteLine("Students in G1:");
            foreach (var student in studentsG1)
            {
                Console.WriteLine(student);
            }
        }
        else if (groupNumber == 2)
        {
            Console.WriteLine("Students in G2:");
            foreach (var student in studentsG2)
            {
                Console.WriteLine(student);
            }
        }
        else
        {
            Console.WriteLine("Invalid group number. Please enter 1 or 2.");
        }
    }
}