var prov = prompt("Introduce tu provincia de nacimiento(Sólo de Andalucía)");
prov = prov.toLowerCase();
var equipo;

if (prov == "cadiz" || prov == "cádiz"){
    equipo = prompt("Olé ahí pishita, ahora dime de qué equipo eres");
    equipo = equipo.toLowerCase();
}
else{
    equipo = prompt("Hola, ¿de qué equipo eres?")
    equipo = equipo.toLowerCase();
}

if (equipo == "cadiz" || equipo == "cádiz"){
    document.write("Ánimo colega");
}
else{
    document.write("Muy bien");
}