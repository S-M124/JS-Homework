using System;

public class Vehicle
{
    public virtual void DisplayInfo()
    {
        Console.WriteLine("I'm a vehicle.");
    }
}

public class Car : Vehicle
{
    public override void DisplayInfo()
    {
        Console.WriteLine("I'm a car and I drive on 4 wheels :)");
    }

    public void Drive()
    {
        Console.WriteLine("The car is driving");
    }
}

public class MotorBike : Vehicle
{
    public override void DisplayInfo()
    {
        Console.WriteLine("I'm a motorbike and I drive on 2 wheels :)");
    }

    public void Wheelie()
    {
        Console.WriteLine("The motorbike is driving on one wheel");
    }
}

public class Boat : Vehicle
{
    public override void DisplayInfo()
    {
        Console.WriteLine("I'm a boat and I do not have wheels :(");
    }

    public void Sail()
    {
        Console.WriteLine("The boat is sailing");
    }
}

public class Airplane : Vehicle
{
    public override void DisplayInfo()
    {
        Console.WriteLine("I'm a plane and I have a couple of wheels :)");
    }

    public void Fly()
    {
        Console.WriteLine("The airplane is flying");
    }
}

public class Program
{
    public static void Main()
    {
        Vehicle car = new Car();
        Vehicle motorBike = new MotorBike();
        Vehicle boat = new Boat();
        Vehicle plane = new Airplane();

        car.DisplayInfo();
        motorBike.DisplayInfo();
        boat.DisplayInfo();
        plane.DisplayInfo();

        ((Car)car).Drive();
        ((MotorBike)motorBike).Wheelie();
        ((Boat)boat).Sail();
        ((Airplane)plane).Fly();
    }
}