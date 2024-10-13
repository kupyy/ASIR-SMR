var bach = prompt("¿Has cursado bachillerato?");
        bach = bach.toLowerCase();

        if (bach == "sí" || bach == "si"){
            document.write("Puedes cursar un ciclo formativo de grado superior");
        }
        else{
            var acc = prompt("¿Has pasado unas pruebas de acceso?");
            acc = acc.toLowerCase();
            if (acc == "sí" || acc == "si"){
                document.write("Puedes cursar un ciclo formativo de grado superior");
            }
            else{
                var gm = prompt("¿Has cursado un grado medio?");
                gm = gm.toLowerCase();
                if (gm == "sí" || gm == "si"){
                    document.write("Puedes cursar un ciclo formativo de grado superior");
                }
                else{
                    document.write("No puedes cursar un ciclo formativo de grado superior");
                }
            }
        }