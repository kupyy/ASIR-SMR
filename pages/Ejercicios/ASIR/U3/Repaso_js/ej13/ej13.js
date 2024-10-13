/*Declaración de variables*/
var dni = parseInt(prompt("Introduce el nº de tu dni"));
var res = dni%23;
var let = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

document.write("La letra correspondiente a tu dni es " + let[res] + ", por lo que su dni al completo sería: " + dni + let[res]);