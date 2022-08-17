function calcularFresnel(){
    var distancia =$("#distancia").val();
    var frecuencia =$("#frecuencia").val();

    if (distancia == undefined) {
        alert("Completar la distancia en Kilometros");
    }

    if (distancia.includes(',') === true ){
        distancia = distancia.replace(',', '.')
    }

    if (frecuencia.includes(',') === true ){
        frecuencia = frecuencia.replace(',', '.')
    }    

    var value = distancia.toString().trim();

    if(value == '' || value == 0 || isNaN(value)){
        alert("Completar la distancia en Kilometros");
    }
    if (frecuencia == undefined) {
        alert("Completar la frecuencia en Ghz");
    }
    var value = frecuencia.toString().trim();

    if(value == '' || value == 0 || isNaN(value)){
        alert("La frecuencia no puede ser cero ni vacio. \nCompletar en Ghz");
    }

    else {
        var auxiliar = distancia / frecuencia;
        var raiz = Math.sqrt(auxiliar);
        const numero = 8.657;
        var radio = raiz * numero;
        if(radio == '' || radio == 0 || isNaN(radio)){
            return;
        } else {
            alert("El radio de la zona de Fresnel es " + radio.toFixed(2) +" metros." );
        }
    }
}
