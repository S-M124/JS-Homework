using System;

internal class Vehicle
{
    public virtual void DisplayInfo()
    {
    }
}

internal class Car : Vehicle
{
    public override void DisplayInfo()
    {
        Console.WriteLine("Im a car and i drive on 4 wheels :)");
    }
}

internal class MotorBike : Vehicle
{
    public override void DisplayInfo()
    {
        Console.WriteLine("Im a motorbike and i drive on 2 wheels :)");
    }
}

internal class Boat : Vehicle
{
    public override void DisplayInfo()
    {
        Console.WriteLine("Im a boat and i do not have wheels :(");
    }
}

internal class Airplane : Vehicle
{
    public override void DisplayInfo()
    {
        Console.WriteLine("Im a plane i have couple of wheels :)");
    }
}

internal class Program
{
    private static void Main()
    {
        Vehicle car = new Car();
        Vehicle motorBike = new MotorBike();
        Vehicle boat = new Boat();
        Vehicle plane = new Airplane();

        car.DisplayInfo();
        motorBike.DisplayInfo();
        boat.DisplayInfo();
        plane.DisplayInfo();
    }
}