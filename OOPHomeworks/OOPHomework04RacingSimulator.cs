using System;

internal class Driver
{
    public string Name { get; set; }
    public int Skill { get; set; }
}

internal class Car
{
    public string Model { get; set; }
    public int Speed { get; set; }
    public Driver Driver { get; set; }

    public int CalculateSpeed()
    {
        return Driver.Skill * Speed;
    }

    public static void RaceCars(Car car1, Car car2)
    {
        int speed1 = car1.CalculateSpeed();
        int speed2 = car2.CalculateSpeed();

        if (speed1 > speed2)
        {
            Console.WriteLine($"{car1.Model} was faster.");
        }
        else
        {
            Console.WriteLine($"{car2.Model} was faster.");
        }
    }
}

internal class Program
{
    private static void Main()
    {
        Driver[] drivers = {
            new Driver { Name = "Bob", Skill = 5 },
            new Driver { Name = "Greg", Skill = 4 },
            new Driver { Name = "Jill", Skill = 3 },
            new Driver { Name = "Anne", Skill = 2 }
        };

        Car[] cars = {
            new Car { Model = "Hyundai", Speed = 120 },
            new Car { Model = "Mazda", Speed = 130 },
            new Car { Model = "Ferrari", Speed = 200 },
            new Car { Model = "Porsche", Speed = 180 }
        };

        Console.WriteLine("Choose a car no.1:");
        for (int i = 0; i < cars.Length; i++)
        {
            Console.WriteLine($"{i + 1}. {cars[i].Model}");
        }
        int car1Index = int.Parse(Console.ReadLine()) - 1;

        Console.WriteLine("Choose Driver:");
        for (int i = 0; i < drivers.Length; i++)
        {
            Console.WriteLine($"{i + 1}. {drivers[i].Name}");
        }
        int driver1Index = int.Parse(Console.ReadLine()) - 1;

        Console.WriteLine("Choose a car no.2:");
        for (int i = 0; i < cars.Length; i++)
        {
            Console.WriteLine($"{i + 1}. {cars[i].Model}");
        }
        int car2Index = int.Parse(Console.ReadLine()) - 1;

        Console.WriteLine("Choose Driver:");
        for (int i = 0; i < drivers.Length; i++)
        {
            Console.WriteLine($"{i + 1}. {drivers[i].Name}");
        }
        int driver2Index = int.Parse(Console.ReadLine()) - 1;

        cars[car1Index].Driver = drivers[driver1Index];
        cars[car2Index].Driver = drivers[driver2Index];

        Car.RaceCars(cars[car1Index], cars[car2Index]);
    }
}