// nivel_actual --> Nivel actual del juego.  
// mas_menos = 0 (decrementar nivel) ;  mas_menos = 1 (aumentar nivel)
function cambio_nivel(nivel_actual, mas_menos) {

    const num_niveles = 12;

    switch(mas_menos) {
        case 0:
            //cargar nivel anterior
            if (nivel_actual <= 1 || nivel_actual >= num_niveles){
                return -1;
            } else {
                nivel_actual--;
                //cargar_nivel(nivel_actual, false);
                return nivel_actual;
            }
        case 1:
            //cargar nivel siguiente
            if (nivel_actual <= 1 || nivel_actual >= num_niveles){
                return -1;
            } else {
                nivel_actual++;
                //cargar_nivel(nivel_actual, false);
                return nivel_actual;
            }
    }
}

module.exports = cambio_nivel;