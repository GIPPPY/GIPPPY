function crearArrayBucle(array, nrepeticiones) {
    var array_resultado = new Array;
    if (array.length == 0) {
        return [];
    } else {
        // bucle para multiplicar el array por el número de instrucciones (nrepeticiones*array.length)
        for (var i = 0; i < nrepeticiones; i++) {
            for (var j = 0; j < array.length; j++) {
                array_resultado.push(array[j]);
            }
        } 
    }
    return array_resultado;
}

module.exports = crearArrayBucle;