using System;
using System.Collections.Generic;

internal class PrintInConsole
{
    public void Print<T>(T item)
    {
        Console.WriteLine(item);
    }

    public void PrintCollection<T>(IEnumerable<T> collection)
    {
        foreach (var item in collection)
        {
            Console.WriteLine(item);
        }
    }
}

internal class Program
{
    private static void Main(string[] args)
    {
        PrintInConsole printer = new PrintInConsole();

        printer.Print("Hello, World!");
        printer.Print(123);
        printer.Print(45.67);

        List<string> stringList = new List<string> { "Apple", "Banana", "Cherry" };
        printer.PrintCollection(stringList);

        List<int> intList = new List<int> { 1, 2, 3, 4, 5 };
        printer.PrintCollection(intList);
    }
}