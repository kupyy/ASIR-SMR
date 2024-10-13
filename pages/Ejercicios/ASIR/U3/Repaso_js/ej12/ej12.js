var array = new Array();

//Introducción de datos
for(var i = 5; i>0; i--){
    array.push(parseInt(prompt("Introduce un número")));
}

//Impresion de datos por pantalla
for(i = 0; i<5; i++){
    document.write("Posición " + i + " = Valor " +array[i]);
    document.write("<br>");
}

//Codigo referente al ejercicio 12

var pos = parseInt(prompt("Introduce un valor"));

if(isNaN(pos)){
    document.write("El valor introducido no es un número")
}
else if (pos > array.length){
    document.write("El valor introducido es superior al de valores del array")
}
else{
    document.write("La posición " + pos + "  ocupa el valor " + array[pos]);
}