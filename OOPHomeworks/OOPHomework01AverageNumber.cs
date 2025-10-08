using System;

namespace AverageNumber
{
    public class Program
    {
        private static void Main(string[] args)
        {
            Console.WriteLine("Enter four numbers:");

            Console.Write("Number 1: ");
            double num1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Number 2: ");
            double num2 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Number 3: ");
            double num3 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Number 4: ");
            double num4 = Convert.ToDouble(Console.ReadLine());

            double average = (num1 + num2 + num3 + num4) / 4;

            Console.WriteLine($"The average is: {average}");
        }
    }
}