var n = parseInt(prompt("Introduce la altura"));
var i = n;

for (; n > 0; n--)
{
    for (var y = i; n <= y; y--)
    {
        document.write("*");
    }
    document.write("<br>");
}