using System;

internal interface Shape
{
    double GetArea();
}

internal class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }

    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }

    public double GetArea()
    {
        return Width * Height;
    }
}

internal class Circle : Shape
{
    public double Radius { get; set; }

    public Circle(double radius)
    {
        Radius = radius;
    }

    public double GetArea()
    {
        return Math.PI * Radius * Radius;
    }
}

internal class Triangle : Shape
{
    public double Base { get; set; }
    public double Height { get; set; }

    public Triangle(double b, double height)
    {
        Base = b;
        Height = height;
    }

    public double GetArea()
    {
        return 0.5 * Base * Height;
    }
}

internal class Program
{
    private static void Main()
    {
        Shape rectangle = new Rectangle(5, 10);
        Shape circle = new Circle(7);
        Shape triangle = new Triangle(6, 8);

        Console.WriteLine($"Rectangle Area: {rectangle.GetArea()}");
        Console.WriteLine($"Circle Area: {circle.GetArea()}");
        Console.WriteLine($"Triangle Area: {triangle.GetArea()}");
    }
}