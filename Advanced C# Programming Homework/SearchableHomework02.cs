using System;

public interface ISearchable
{
    void Search(string word);
}

public class Document : ISearchable
{
    private string content;

    public Document(string content)
    {
        this.content = content;
    }

    public void Search(string word)
    {
        if (content.Contains(word))
        {
            Console.WriteLine($"The word '{word}' was found in the document.");
        }
        else
        {
            Console.WriteLine($"The word '{word}' was not found in the document.");
        }
    }
}

public class WebPage : ISearchable
{
    private string htmlContent;

    public WebPage(string htmlContent)
    {
        this.htmlContent = htmlContent;
    }

    public void Search(string word)
    {
        if (htmlContent.Contains(word))
        {
            Console.WriteLine($"The word '{word}' was found in the web page.");
        }
        else
        {
            Console.WriteLine($"The word '{word}' was not found in the web page.");
        }
    }
}

internal class Program
{
    private static void Main(string[] args)
    {
        ISearchable document = new Document("This is a sample document.");
        document.Search("sample");

        ISearchable webPage = new WebPage("<html><body>This is a sample web page.</body></html>");
        webPage.Search("web");
    }
}