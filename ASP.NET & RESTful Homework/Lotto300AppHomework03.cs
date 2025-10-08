using System;
using System.Collections.Generic;
using System.Linq;

namespace LotteryApp
{
    public class Program
    {
        private static List<Player> players = new List<Player>();
        private static List<Winner> winners = new List<Winner>();
        private static Random random = new Random();
        private static bool isDrawActive = false;

        public static void Main(string[] args)
        {
            // Example usage
            Admin admin = new Admin();
            admin.InitiateDraw();

            Player player1 = new Player("John Doe");
            player1.SubmitNumbers(new List<int> { 1, 2, 3, 4, 5, 6, 7 });

            Player player2 = new Player("Jane Smith");
            player2.SubmitNumbers(new List<int> { 1, 2, 3, 4, 5, 6, 8 });

            admin.InitiateDraw();
            DisplayWinners();
        }

        public static void DisplayWinners()
        {
            foreach (var winner in winners)
            {
                Console.WriteLine($"Winner: {winner.Name}, Numbers: {string.Join(", ", winner.WinningNumbers)}, Prize: {winner.Prize}");
            }
        }

        public class Player
        {
            public string Name { get; }
            public List<int> SubmittedNumbers { get; private set; }

            public Player(string name)
            {
                Name = name;
            }

            public void SubmitNumbers(List<int> numbers)
            {
                if (numbers.Count == 7 && numbers.All(n => n >= 1 && n <= 37))
                {
                    SubmittedNumbers = numbers;
                    players.Add(this);
                    Console.WriteLine($"{Name} has submitted their numbers.");
                }
                else
                {
                    Console.WriteLine("Invalid number submission.");
                }
            }
        }

        public class Admin
        {
            public void InitiateDraw()
            {
                if (!isDrawActive)
                {
                    isDrawActive = true;
                    List<int> drawnNumbers = DrawNumbers();
                    CheckWinners(drawnNumbers);
                    isDrawActive = false;
                }
            }

            private List<int> DrawNumbers()
            {
                return Enumerable.Range(1, 37).OrderBy(x => random.Next()).Take(8).ToList();
            }

            private void CheckWinners(List<int> drawnNumbers)
            {
                foreach (var player in players)
                {
                    int matchCount = player.SubmittedNumbers.Intersect(drawnNumbers).Count();
                    if (matchCount >= 3)
                    {
                        string prize = GetPrize(matchCount);
                        winners.Add(new Winner(player.Name, player.SubmittedNumbers, prize));
                    }
                }
            }

            private string GetPrize(int matchCount)
            {
                return matchCount switch
                {
                    7 => "Car",
                    6 => "Vacation",
                    5 => "TV",
                    4 => "$100 Gift Card",
                    3 => "$50 Gift Card",
                    _ => "No Prize"
                };
            }
        }

        public class Winner
        {
            public string Name { get; }
            public List<int> WinningNumbers { get; }
            public string Prize { get; }

            public Winner(string name, List<int> winningNumbers, string prize)
            {
                Name = name;
                WinningNumbers = winningNumbers;
                Prize = prize;
            }
        }
    }
}