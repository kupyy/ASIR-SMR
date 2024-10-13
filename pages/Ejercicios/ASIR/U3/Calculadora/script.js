var inp = 0;
var n1 = 0;
var n2 = 0;

//Funciones
//FUNCION SUMA
function sum(n1, n2){    
    if(isNaN(n1) || isNaN(n2)){
        res = "Tipo de dato no válido";
    }
    else{
        res = n1+n2;
    }
    return res;
}

//FUNCION RESTA
function rest(n1, n2){
    if(isNaN(n1) || isNaN(n2)){
        res = "Tipo de dato no válido";
    }
        else{
        res = n1-n2;
    }
    return res;
}

//FUNCION DIVISION
function div(n1, n2){ 
    if(isNaN(n1) || isNaN(n2)){
        res = "Tipo de dato no válido";
    }
    else{
        if (n2 != 0){
            res = n1/n2;
        }
        else{
            res = "El divisor no puede ser 0";
        }
    }
    return res;
}

//FUNCION MULTIPLICACION
function mult(n1, n2){

    if(isNaN(n1) || isNaN(n2)){
        res = "Tipo de dato no válido";
    }
    else{
        res = n1*n2;
    }
    return res;
}

//FUNCION POTENCIA
function potencia(n1, n2){
    if(isNaN(n1) || isNaN(n2)){
        res = "Tipo de dato no válido";
    }
    else{
        res = n1**n2;
    }
    return res;
}

//FUNCION FACTORIAL
function factorial(n1){
    res = 1;

    if(isNaN(n1)){
        res = "Tipo de dato no válido";
    }
    else{
        for (var i = n1; i > 1; i--){
            res = res*i;
        }
    }
    return res;
}

//PROGRAMA
while (inp != 7){
    inp = parseInt(prompt("Introduce una opción: \n1 - Suma\n2 - Resta\n3 - División\n4 - Multiplicación\n5 - Potencia\n6 - Factorial\n7 - Salir"));
    switch(inp){
        //SUMA
        case 1:
            n1 = parseFloat(prompt("Introduce el primer número:"));
            n2 = parseFloat(prompt("Introduce el segundo número:"));

            sum(n1, n2);
            alert(res);
            break;
        //RESTA
        case 2:
            n1 = parseFloat(prompt("Introduce el primer número:"));
            n2 = parseFloat(prompt("Introduce el segundo número:"));

            rest(n1, n2)
            alert(res);
            break;
        //DIVISION
        case 3:
            n1 = parseFloat(prompt("Introduce el dividendo:"));
            n2 = parseFloat(prompt("Introduce el divisor(no puede ser 0)"));

            div(n1, n2)
            alert(res);
            break;
        //MULTIPLICACION
        case 4:
            n1 = parseFloat(prompt("Introduce el primer número:"));
            n2 = parseFloat(prompt("Introduce el segundo número:"));

            mult(n1, n2)
            alert(res);
            break;
        //POTENCIA
        case 5:
            n1 = parseFloat(prompt("Introduce la base:"));
            n2 = parseFloat(prompt("Introduce el exponente:"));

            potencia(n1, n2)
            alert(res);
            break;
        //FACTORIAL
        case 6:
            n1 = parseFloat(prompt("Introduce el primer número:"));
            factorial(n1)
            alert(res);
            break;
    }
}
