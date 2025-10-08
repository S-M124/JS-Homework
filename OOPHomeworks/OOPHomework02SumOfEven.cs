using System;

internal class SumOfEven
{
    private static void Main()
    {
        int[] numbers = new int[6];
        Console.WriteLine("Enter 6 integers:");

        for (int i = 0; i < numbers.Length; i++)
        {
            numbers[i] = Convert.ToInt32(Console.ReadLine());
        }

        int sum = 0;
        foreach (int number in numbers)
        {
            if (number % 2 == 0)
            {
                sum += number;
            }
        }

        Console.WriteLine("The sum of the even numbers is: " + sum);
    }
}