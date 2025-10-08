using System;

public class Employee
{
    public string Name { get; set; }
    public int Salary { get; set; }

    public virtual double GetSalary()
    {
        return Salary;
    }

    public void PrintInfo()
    {
        Console.WriteLine($"Name: {Name}, Salary: {Salary}");
    }
}

public class Manager : Employee
{
    public string Department { get; set; }
}

public class SalesPerson : Employee
{
    public int SalesTarget { get; set; }
}

public class Contractor : Employee
{
    public double WorkHours { get; set; }
    public int PayPerHour { get; set; }
    public Manager Responsible { get; set; }
}

public class CEO : Employee
{
    private double SharesPrice { get; set; }
    public Employee[] Employees { get; set; }
    public int Shares { get; set; }

    public void AddSharesPrice(double price)
    {
        SharesPrice = price;
    }

    public override double GetSalary()
    {
        return Salary + Shares * SharesPrice;
    }

    public void PrintEmployees()
    {
        foreach (var employee in Employees)
        {
            employee.PrintInfo();
        }
    }
}

public class Program
{
    public static void Main()
    {
        Manager manager1 = new Manager { Name = "Alice", Salary = 80000, Department = "HR" };
        Manager manager2 = new Manager { Name = "Bob", Salary = 90000, Department = "IT" };
        SalesPerson salesPerson = new SalesPerson { Name = "Charlie", Salary = 60000, SalesTarget = 100 };
        Contractor contractor1 = new Contractor { Name = "David", Salary = 50000, WorkHours = 40, PayPerHour = 20, Responsible = manager1 };
        Contractor contractor2 = new Contractor { Name = "Eve", Salary = 55000, WorkHours = 35, PayPerHour = 25, Responsible = manager2 };

        CEO ceo = new CEO
        {
            Name = "Frank",
            Salary = 150000,
            Shares = 1000,
            Employees = new Employee[] { manager1, manager2, salesPerson, contractor1, contractor2 }
        };

        ceo.AddSharesPrice(10.5);
        ceo.PrintInfo();
        ceo.PrintEmployees();
        Console.WriteLine($"CEO Salary: {ceo.GetSalary()}");
    }
}