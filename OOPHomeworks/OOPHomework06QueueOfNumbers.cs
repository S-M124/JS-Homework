using System;
using System.Collections.Generic;

internal class Program
{
    private static void Main()
    {
        Queue<int> numbers = new Queue<int>();
        while (true)
        {
            Console.Write("Enter a number: ");
            if (int.TryParse(Console.ReadLine(), out int num))
            {
                numbers.Enqueue(num);
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a valid number.");
                continue;
            }

            Console.Write("Do you want to input another number? (Y/N): ");
            string response = Console.ReadLine().Trim().ToUpper();
            if (response != "Y")
            {
                break;
            }
        }

        Console.WriteLine("Numbers in the order entered:");
        while (numbers.Count > 0)
        {
            Console.WriteLine(numbers.Dequeue());
        }
    }
}