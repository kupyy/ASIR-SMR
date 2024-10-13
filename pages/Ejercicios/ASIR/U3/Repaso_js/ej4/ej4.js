var l1 = parseInt(prompt("Dime un lado"));
var l2 = parseInt(prompt("Dime otro lado"));
var l3 = parseInt(prompt("Dime otro lado"));
var suml = 0;
var tri = new Boolean(false);

if (l1 > l2 && l1 > l3){
    suml = l2 + l3;
    if (l1 < suml){
        tri = true;
    }
    else{
        tri = false;
    }
}
else if (l2 > l1 && l2 > l3){
    suml = l1 + l3;
    if (l2 < suml){
        tri = true;
    }
    else{
        tri = false;
    }
}
else if (l3 > l1 && l3 > l2){
    suml = l2 + l1;
    if (l3 < suml){
        tri = true;
    }
    else{
        tri = false;
    }
}

if (tri){
    if(l1 == l2 && l2 == l3){
        document.write("Es un triángulo equilátero");
    }
    else if(l1 == l2 && l2 > l3) {
        document.write("Es un triángulo isósceles");
    }
    else{
        document.write("Es un triángulo escaleno");
    }
}
else{
    document.write("No es un triángulo");
}