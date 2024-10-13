var tipo = prompt("Bienvenido a Pizzeria Napoli, por favor, introduzca el tipo de pizza que desee.\nNormal.\nVegetariana.")
tipo = tipo.toLowerCase();
var ingr;

if (tipo == "normal") {
    var ingr = prompt("Ahora elija un ingrediente:\n-Pepperoni\n-Jamón\n-Salmón");
    ingr = ingr.toLowerCase();

    if (ingr == "peperoni") {
        document.write("Has elegido una pizza pepperoni, sus ingredientes son: tomate, mozzarella y peperoni");
    }
    else if (ingr == "jamón" || ingr == "jamon") {
        document.write("Has elegido una pizza de jamón, sus ingredientes son: tomate, mozzarella y jamón");
    }
    else if (ingr == "salmón" || ingr == "salmon") {
        document.write("Has elegido una pizza de salmón, sus ingredientes son: tomate, mozzarella y salmón");
    }
	else if (ingr == "piña"){
		document.write("Que haces gilipollas");
	}
    else {
        document.write("Los datos introducidos no son correctos");
    }
}
else if (tipo == "vegetariana"){
    ingr = prompt("Ahora elija un ingrediente:\n-Pimiento\n-Tofu");
    ingr = ingr.toLowerCase();

    if (ingr == "pimiento") {
        document.write("Has elegido la pizza vegetariana de pimientos, sus ingredientes son: tomate, mozzarella y pimiento");
    }
    else if (ingr == "tofu") {
        document.write("Has elegido la pizza Vegetariana de tofu, sus ingredientes son: tomate, mozzarella y tofu");
    }
    else {
        document.write("Los datos introducidos no son correctos");
    }
}  

