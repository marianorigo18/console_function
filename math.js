function suma(x1, x2){
    return x1 + x2;
}

function resta(x1, x2){
    return x1 - x2;
}

function multiplicacion(x1, x2){
    return x1 * x2;
}

function division(x1, x2){
    if(x2 == 0){
        console.log("no es posible dividir entre 0");
    }else{ 
        return x1 / x2;
    }
}
exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion
exports.division = division