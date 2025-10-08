using System;

internal abstract class Employee
{
    public string Name { get; set; }
    public int Id { get; set; }

    public Employee(string name, int id)
    {
        Name = name;
        Id = id;
    }

    public abstract decimal CalculateSalary();

    public abstract void DisplayInfo();
}

internal class Manager : Employee
{
    public decimal BasicSalary { get; set; }
    public decimal Bonus { get; set; }

    public Manager(string name, int id, decimal basicSalary, decimal bonus) : base(name, id)
    {
        BasicSalary = basicSalary;
        Bonus = bonus;
    }

    public override decimal CalculateSalary()
    {
        return BasicSalary + Bonus;
    }

    public override void DisplayInfo()
    {
        Console.WriteLine($"Manager ID: {Id}, Name: {Name}");
        Console.WriteLine($"Salary: {CalculateSalary():C}");
    }
}

internal class Programmer : Employee
{
    public decimal HourlyRate { get; set; }
    public int HoursWorked { get; set; }

    public Programmer(string name, int id, decimal hourlyRate, int hoursWorked) : base(name, id)
    {
        HourlyRate = hourlyRate;
        HoursWorked = hoursWorked;
    }

    public override decimal CalculateSalary()
    {
        return HourlyRate * HoursWorked;
    }

    public override void DisplayInfo()
    {
        Console.WriteLine($"Programmer ID: {Id}, Name: {Name}");
        Console.WriteLine($"Salary: {CalculateSalary():C}");
    }
}

internal class Program
{
    private static void Main()
    {
        Employee manager = new Manager("Alice", 1, 5000m, 1500m);
        Employee programmer = new Programmer("Bob Bobsky", 2, 50m, 160);

        manager.DisplayInfo();
        Console.WriteLine();
        programmer.DisplayInfo();
    }
}