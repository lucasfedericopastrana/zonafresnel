function calcularFresnel(){
    var distancia =$("#distancia").val();
    if (distancia == undefined) {
        alert("Completar la distancia en Kilometros");
    }
    var value = distancia.toString().trim();

    if(value == '' || value == 0 || isNaN(value)){
        alert("Completar la distancia en Kilometros");
    }
    var frecuencia =$("#frecuencia").val();
    if (frecuencia == undefined) {
        alert("Completar la frecuencia en Mghz");
    }
    var value = frecuencia.toString().trim();

    if(value == '' || value == 0 || isNaN(value)){
        alert("Completar la frecuencia en Ghz");
    }
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