var array = new Array();

//Introducción de datos
for(var i = 5; i>0; i--){
    array.push(parseInt(prompt("Introduce un número")));
}

//Impresion de datos por pantalla
for(i = 0; i<5; i++){
    document.write("Valor " + i + "-" +array[i]);
    document.write("<br>");
}
