using System;
using System.IO;
using System.Linq;

internal class Program
{
    private static void Main()
    {
        string directoryPath = "Files";
        string filePath = Path.Combine(directoryPath, "names.txt");

        Directory.CreateDirectory(directoryPath);
        File.Create(filePath).Close();

        Console.WriteLine("Enter names (type 'exit' to finish):");
        string input;
        using (StreamWriter writer = new StreamWriter(filePath, true))
        {
            while ((input = Console.ReadLine()) != "exit")
            {
                writer.WriteLine(input);
            }
        }

        for (char letter = 'A'; letter <= 'Z'; letter++)
        {
            string filteredFilePath = Path.Combine(directoryPath, $"namesStartingWith_{letter}.txt");
            var namesStartingWithLetter = File.ReadAllLines(filePath)
                                              .Where(name => name.StartsWith(letter.ToString(), StringComparison.OrdinalIgnoreCase))
                                              .ToList();

            if (namesStartingWithLetter.Any())
            {
                using (StreamWriter writer = new StreamWriter(filteredFilePath, true))
                {
                    foreach (var name in namesStartingWithLetter)
                    {
                        writer.WriteLine(name);
                    }
                }
            }
        }

        for (char letter = 'A'; letter <= 'Z'; letter++)
        {
            string filteredFilePath = Path.Combine(directoryPath, $"namesStartingWith_{letter}.txt");
            var namesStartingWithLetter = File.ReadAllLines(filePath)
                                              .Where(name => name.StartsWith(letter.ToString(), StringComparison.OrdinalIgnoreCase))
                                              .ToList();

            if (namesStartingWithLetter.Any())
            {
                using (StreamWriter writer = new StreamWriter(filteredFilePath, true))
                {
                    foreach (var name in namesStartingWithLetter)
                    {
                        writer.WriteLine(name);
                    }
                }
            }
        }
    }
}