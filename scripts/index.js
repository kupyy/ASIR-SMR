function switch_style(elemento){
    
    var objetivo;

    switch (elemento.id) {
        case "smr_boton":
            objetivo = document.getElementById("smr");
            break;
        case "asir_boton":
            objetivo = document.getElementById("asir");
            break;
    }



    if (objetivo.style.display == ''){
        objetivo.style.display='none';
    }
    else if(objetivo.style.display == 'none'){
        objetivo.style.display='';
    }
}

