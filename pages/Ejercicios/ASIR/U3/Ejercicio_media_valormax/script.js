var notas = new Array();
var x = 0;
var avg = 0;
var may = 0;

//Insercion de datos
for(var i = 0; i<5;i++){
    notas.push(parseFloat(prompt("Introduzca la nota del alumno")));
}

//Calculo de nota media
for (i in notas){
    x = x+notas[i]
}

avg = x/notas.length;

//Impresión de nota media
document.write("La nota media es " + avg + "<br>");


//Cálculo de nota mayor

may = Math.max(...notas);

document.write("La nota más alta es " + may);