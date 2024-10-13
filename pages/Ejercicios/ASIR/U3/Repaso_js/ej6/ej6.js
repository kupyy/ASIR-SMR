var n = parseInt(prompt("Introduce una cantidad a invertir"));
var int = parseFloat(prompt("Introduce el interés")).toFixed(2);
var t = parseInt(prompt("Introduce los años de la inversión"))
int = int/100 + 1;

for(var i = 0;i < t; i++){
    n = parseFloat(n*int).toFixed(2);
    document.write("El año " + i + " el capital será de " + n + "€<br>");
}
