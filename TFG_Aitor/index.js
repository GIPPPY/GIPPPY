/* Copyright. 2021 Aitor Lapeña Navarro, UPV.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, 
OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) 
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


*********************************/

var nivel_actual = 1;
const num_niveles = 13;
var eficiente = 0;
var idioma = "";
var repeticiones_permitidas = 50;
var array_obstaculos = new Array;
var array_instrucciones = new Array;
var array_traducido = new Array;
var array_bucle = new Array;
var array_condicional = new Array;
var array_tcases = new Array;
var array_while = new Array;
var casos_prueba = new Array;
var array_oraculos = new Array;
var error_inst = false;
let map_idioma = new Map();
let map_regex = new Map();
let pararEjecucion = false;
let niveles_superados = 0;
let superados_gafas = 1;
let superados_gorrofiesta = 3;
let superados_esposas = 6;
let superados_lazo = 7;
let superados_medalla = 9;
let superados_gorro = 10;
let superados_coche = 12;
let superados_insignia_1 = 4;
let superados_insignia_2 = 8;
let superados_insignia_3 = 12;
let con_gafas = false;
let con_gorro = false;
let con_pies = false;
let imagen_robot_espalda = "robot_espalda.gif";
let imagen_robot_frente = "robot_frente.gif";
let imagen_robot_derecha = "robot_lateral.gif";
let imagen_robot_izquierda = "robot_lateral_atras.gif";
let obj_cabeza = "";
let obj_cuerpo = "";
let obj_pies = "";
let nombre_imagen_espalda = `robot_espalda${obj_cabeza}${obj_cuerpo}${obj_pies}.gif`;
let nombre_imagen_frente = `robot_frente${obj_cabeza}${obj_cuerpo}${obj_pies}.gif`;
let nombre_imagen_derecha = `robot_lateral${obj_cabeza}${obj_cuerpo}${obj_pies}.gif`;
let nombre_imagen_izquierda = `robot_lateral_atras${obj_cabeza}${obj_cuerpo}${obj_pies}.gif`;

// Función para cambiar el idioma del juego.
/**
 * @param {Idioma deseado para el juego} lang 
 */
function cambiarIdioma(lang) {
    var h4 = document.getElementById("h4_inicio");
    var btn_trad = document.getElementById("traducirprog");
    var btn = document.getElementById('ejecutarprog');
    var btn_parar = document.getElementById('pararprog');
    var btn_anivel = document.getElementById("anivel");
    var btn_rnivel = document.getElementById("rnivel"); 
    //var btn_usuario = document.getElementById("usuario"); 
    //var btn_clasificacion = document.getElementById("clasificación"); 
    var texto_py = document.getElementById('tarea');

    switch (lang) {  // preparado para añadir los lenguajes que haya diseñados.
        case "esp":
			map_idioma = map_esp;
			map_regex = map_reg_esp;
            idioma = "español";
            break;
        case "eng":
			map_idioma = map_eng;
			map_regex = map_reg_eng;
            idioma = "inglés";
            break;
        case "vlc":
			map_idioma = map_vlc;
			map_regex = map_reg_esp;
            idioma = "valenciano";
            break;
        case "por":
            map_idioma = map_por;
            map_regex = map_reg_eng;
            idioma = "portugués";
            break;
        case "ger":
            map_idioma = map_ger;
            map_regex = map_reg_eng;
            idioma = "alemán";
            break;
        case "jpn":
            map_idioma = map_jpn;
            map_regex = map_reg_eng;
            idioma = "japonés";
            break;
        default:
            break;
    }

    // Texto del h4 y los botones cambiado al idioma apropiado.
    h4.innerHTML = map_idioma.get('titulo');
    btn_trad.value = map_idioma.get('btnTraducir');
    btn.value = map_idioma.get('btnEjecutar');
    btn_parar.value = map_idioma.get('btnParar');
    btn_rnivel.value = map_idioma.get('btnNivelMenos');
    btn_anivel.value = map_idioma.get('btnNivelMas');
    //btn_usuario.value = map_idioma.get('btnUsuario');
    //btn_clasificacion.value = map_idioma.get('btnClasificacion');
    output.value = "";				
    // iniciar el contenido en el idioma apropiado para el panel de código cuando hagamos click.
	texto_py.value = map_idioma.get('nivel' + nivel_actual);    
}


// prim_ejecucion, si TRUE no hay que limpiar el nivel, si FALSE limpiar el nivel.
/**
 * @param {Nivel actual del juego} nivel 
 * @param {Booleano para indicar si el juego se acaba de iniciar o no} prim_ejecucion 
 */
function cargar_nivel(nivel, prim_ejecucion, esParada) {
	nivel_actual = nivel;
    iniciar_nivel('nivel'+nivel, prim_ejecucion, esParada);	
    switch (nivel_actual) {
        case 1:
            // NIVEL 1			
            for (var i=0; i<9; i++) {
				incluir_obstaculo(2,i,'obs');
				incluir_obstaculo(4,i,'obs');
			}
            break;
        case 2:
            // NIVEL 2
			incluir_obstaculo(0,0,'obs');
			incluir_obstaculo(0,3,'obs');
			incluir_obstaculo(0,6,'obs');
			incluir_obstaculo(3,4,'obs');
			incluir_obstaculo(6,0,'obs');
			incluir_obstaculo(6,3,'obs');
			incluir_obstaculo(6,6,'obs');
            break;
        case 3:
            // NIVEL 3
			incluir_obstaculo(0,0,'obs');
			incluir_obstaculo(0,3,'obs');
			incluir_obstaculo(0,6,'obs');
			incluir_obstaculo(3,4,'pinchos');
			incluir_obstaculo(6,0,'obs');
			incluir_obstaculo(6,3,'obs');
			incluir_obstaculo(6,6,'obs');
            break;            
        case 4:
            // NIVEL 4 -->  ALEATORIO
            incluir_obstaculo_aleatorio(2,'obs',7,6);
			incluir_obstaculo(0,5,'obs');
			incluir_obstaculo(2,5,'obs');
			incluir_obstaculo(4,5,'obs');
			incluir_obstaculo(6,5,'obs');
			incluir_obstaculo(3,6,'obs');
            break;
        case 5:
            // NIVEL 5 --> ALEATORIO
			incluir_obstaculo(1,3,'pinchos');
			incluir_obstaculo(2,3,'pinchos');
			incluir_obstaculo(3,3,'pinchos');
			incluir_obstaculo(4,3,'pinchos');
			incluir_obstaculo(5,3,'pinchos');
			incluir_obstaculo(0,6,'pinchos');
			incluir_obstaculo(2,6,'pinchos');
			incluir_obstaculo(4,6,'pinchos');
			incluir_obstaculo(6,6,'pinchos');
            // El último obstáculo con pinchos del nivel es aleatorio
            var random_pos = Math.floor(Math.random() * 3);
            for (var j=0; j<3; j++) {
                if (j == random_pos) {
					incluir_obstaculo(j==0?1:j==1?3:5,7,'pinchos');
                    break;
                }
            }
            break;
        case 6:
            // NIVEL 6
            for (var i=1; i<8; i++) {
			    incluir_obstaculo(1,i,'obs');
			    incluir_obstaculo(5,i,'obs');
            }

            for (var i=2; i<6; i++) {
				if (i!=3)
					incluir_obstaculo(i,1,'obs');
				incluir_obstaculo(i,7,'obs');
            }
            break; 
        case 7:
                // NIVEL 7 -> INTRODUCIR CONDICIONALES			
                incluir_obstaculo(0,0,'pinchos');
                incluir_obstaculo(6,0,'pinchos');
                incluir_obstaculo(3,7,'pinchos');
                incluir_obstaculo_aleatorio(2,'obs',7,6);
                //incluir_obstaculo_aleatorio(4,'pinchos',7,5);
            
                var i = 0;
                var j = 0;
                var y = Math.floor((Math.random() * 7) + 1);
                var z = Math.floor((Math.random() * 7) + 1);
                while (z == y) {
                    z = Math.floor((Math.random() * 7) + 1);
                }
                while (i<5){
                    // el valor de x decide aleatoriamente donde habrá un hueco
                    if (y!=j && z!=j){
                        incluir_obstaculo(j,4,'pinchos');
                        i++;					
                    }
                    j++;
                }    
                break;
        case 8:
            // NIVEL 8 -> nivel dificil
            incluir_obstaculo_aleatorio(4,'pinchos',7,6);
            incluir_obstaculo_aleatorio(6,'pinchos',7,6);

            var i = 0;
            var j = 0;
            // w,x -> primera fila de obstáculos
            var w = Math.floor((Math.random() * 7) + 1);
            var x = Math.floor((Math.random() * 7) + 1);
            while (i<5){
                // los valores de 'w' y 'x' deciden aleatoriamente donde habrá un hueco
                if (w!=j && x!=j){
                    incluir_obstaculo(j,2,'pinchos');
                    i++;					
                }
                j++;
            }
            for (var i=0; i<7; i++) {
                // dejar libre el hueco del final
                if (i!=3)
                    incluir_obstaculo(i,8,'pinchos');
            }    
            break;
        case 9:
            // NIVEL 9: INTRODUCIR BUCLES 'REPITE'
			incluir_obstaculo(0,0,'obs');
			incluir_obstaculo(0,5,'pinchos');
			incluir_obstaculo(0,8,'obs');
			incluir_obstaculo(2,1,'obs');
			incluir_obstaculo(2,5,'pinchos');
			incluir_obstaculo(3,4,'pinchos');
			incluir_obstaculo(4,1,'obs');
			incluir_obstaculo(4,5,'pinchos');
			incluir_obstaculo(6,0,'obs');
			incluir_obstaculo(6,5,'pinchos');
			incluir_obstaculo(6,8,'obs');
            break;			
        case 10:
            // NIVEL 10 -> While
			incluir_obstaculo(0,0,'obs');
			incluir_obstaculo(0,5,'obs');
			incluir_obstaculo(0,8,'obs');
			incluir_obstaculo(2,1,'obs');
			incluir_obstaculo(2,5,'obs');
			incluir_obstaculo(3,4,'obs');
			incluir_obstaculo(4,1,'obs');
			incluir_obstaculo(4,5,'obs');
			incluir_obstaculo(6,0,'obs');
			incluir_obstaculo(6,5,'obs');
			incluir_obstaculo(6,8,'obs');            
            break;
        case 11:
            // NIVEL 11 -> ALEATORIO COMPLETAMENTE
            incluir_obstaculo_aleatorio(2,'obs',7,6);
            incluir_obstaculo_aleatorio(4,'pinchos',7,6);
            incluir_obstaculo_aleatorio(7,'obs',7,6);
            break;
        case 12:
            /* NIVEL 12 -> Implementar testing */
            for(var b=0; b<9; b++) {
                if (b!=3 && b!=7) {
					incluir_obstaculo(0,b,'obs');
                    incluir_obstaculo(6,b,'obs');
                }
            }
            for(var b=1; b<6; b++) {
                if (b!=5) 
					incluir_obstaculo(b,3,'pinchos');
				if (b!=1) 
					incluir_obstaculo(b,7,'pinchos');
            }
            break;
        /*case 13: // NEW: Testing + while
            for(var b=0; b<9; b++) {
                if (b!=3 && b!=7) {
					incluir_obstaculo(0,b,'obs');
                    incluir_obstaculo(6,b,'obs');
                }
            }
            for(var b=1; b<6; b++) {
                if (b!=5) 
					incluir_obstaculo(b,3,'pinchos');
				if (b!=1) 
					incluir_obstaculo(b,7,'pinchos');
            }
            break;*/
        case 13:
            // NIVEL 13 -> Unit Test + nivel difícil
            for(var b=0; b<9; b++) {
                incluir_obstaculo(0,b,'pinchos');
                incluir_obstaculo(6,b,'pinchos');
            }						
            var w = Math.floor((Math.random() * 5) + 1);
            var x = Math.floor((Math.random() * 5) + 1);
            var y = Math.floor((Math.random() * 5) + 1);
            var z = Math.floor((Math.random() * 5) + 1);
			for(var j=1; j<6; j++) {
                if (w!=j)
					incluir_obstaculo(j,1,'pinchos');
				if (x!=j)
					incluir_obstaculo(j,3,'pinchos');
				if (y!=j)
					incluir_obstaculo(j,5,'pinchos');
				if (z!=j)
					incluir_obstaculo(j,7,'pinchos');
            }
            break;
        case 14: // NEW: Solución genérica + aleatorio
            incluir_obstaculo_aleatorio(1,'obs',7,4);
            incluir_obstaculo_aleatorio(4,'obs',7,5);
            incluir_obstaculo_aleatorio(7,'obs',7,6);
            break;
    }
}

function incluir_obstaculo_aleatorio(columna, tipo, num_total, num_obs) {
    var x = Math.floor((Math.random() * num_total) + 1);
    var i = 0;
    var j = 0;
    while (i<num_obs){
        // el valor de x decide aleatoriamente donde habrá un hueco
        if (x!=j){
            incluir_obstaculo(j,columna,tipo);
            i++;					
        }
        j++;
    }
}

function incluir_obstaculo(pos_x, pos_y, tipo) {
	var img = new Image();	
	img.src = tipo=="obs" ? "obs.gif" : "pinchos.gif";
	img.style.height = '50px';
	img.style.width = '50px';
	img.style.position = 'absolute';
	img.style.top = 5 + 60*pos_x + 'px';
	img.style.zIndex = 6;
	img.style.left = 10 + 60*pos_y + 'px';
	
	array_obstaculos.push(img);
	escenario.appendChild(img);
}

function cambio_nivel(mas_menos) {
    pararEjecucion=true;
    switch(mas_menos) {
        case 0:
            //cargar nivel anterior
            if (nivel_actual <= 1){
                mostrarError(map_idioma.get('errorBajarNivel'));
            } else {
                nivel_actual--;
                cargar_nivel(nivel_actual, false, false);
            }
            break;
        case 1:
            //cargar nivel siguiente
            if (nivel_actual >= num_niveles){
                mostrarError(map_idioma.get('errorSubirNivel'));
            } else {
                nivel_actual++;
                cargar_nivel(nivel_actual, false, false);
            }
            break;
    }
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function mostrarError(data) {
    alert(data);
}

// Función que se activa al hacer click en el botón "Traducir código". Resetea el nivel (consola, robot, arrays) y controla el parser de código.
function traducirCodigo() {
    var texto_salida = document.getElementById("output");
    var btn = document.getElementById("ejecutarprog");
    var texto_python = document.getElementById("tarea");
    var img_player = document.getElementById('robot');

    var texto = texto_python.value;

    // Resetear el valor de la consola.
    texto_salida.value = "";

    // Resetear error en instrucciones y solución eficiente.
    error_inst = false;
    eficiente = 0;

    // Resetear arrays para las instrucciones.
    array_instrucciones = [];
    array_traducido = [];
    array_bucle = [];
    array_condicional = [];
    array_oraculos = [];
    array_tcases = [];
    array_while = [];
    casos_prueba = [];
    // Cuando se vuelva a traducir, el robot debe volver a la posición inicial para reiniciar el nivel.
    img_player.style.left = "10px";
    img_player.style.top = "180px";
    img_player.src = imagen_robot_derecha;

    parsearCodigo(texto).then(array => {
        if (array == null) {
            /* do nothing */
        } else {
            comprobarArray(array).then(correcto => {
                if (correcto) {
                    texto_salida.value = map_idioma.get('traducidoOK');
                    btn.disabled = false;
                } else {
                    btn.disabled = true;
                }
            });
        }
    });
}


// Función para filtrar el contenido del panel de código (ignorar comentarios y añadir instrucciones al array).
/**
 * @param {String con todo el contenido del panel de código} codigo 
 * @returns Promise resolve()/reject()
 */
function parsearCodigo(codigo) {

    return new Promise(function(resolve, reject) {
        var texto_salida = document.getElementById('output');
        var es_Comentario_largo = false;
        var es_Comentario_linea = false;
        var contador_comillas = 0;
        var instruccion = "";
    
        for (var i = 0; i < codigo.length; i++) {
            var caracter = codigo.charAt(i);
            switch (caracter) {
                case '#':
                    if (!es_Comentario_linea) {
                        es_Comentario_linea = true;
                    }
                    if (instruccion != "") {
                        if (instruccion.charAt(0) == ' ') {  // Eliminar espacios en caso de haber un comentario tras alguna instrucción, pero sin perder la identación de Python.
                            var inst_temp = instruccion;
                            inst_temp = inst_temp.trim();
                            instruccion = "  " + inst_temp;
                        } else {   // Eliminar espacios sin importar la identación de Python.
                            instruccion = instruccion.trim();
                        }
                        var añadir = array_instrucciones.push(instruccion);
                        instruccion = "";
                    }
                    break;
                case '\n':
                    if (es_Comentario_linea) {
                        es_Comentario_linea = false;
                    } else if (es_Comentario_largo) {
                        /* do nothing */
                    } else {
                        if (instruccion != "") {
                            añadir = array_instrucciones.push(instruccion);
                            instruccion = "";
                        }
                    }
                    break;
                case "'":
                    if (es_Comentario_linea) {
                        // do nothing
                    } else if (!es_Comentario_largo) {
                        /* Buscar inicio de comentario*/
                        if (contador_comillas == 0) {
                            contador_comillas++;
                        } else if (contador_comillas < 3) {
                            if (codigo.charAt(i-1) == "'") {
                                contador_comillas++;
                            } else {
                                /* Error, si encuentra una comilla o 2 comillas no es válido*/
                                contador_comillas = 0;
                                resolve(null);
                            }
                        }
                        if (contador_comillas == 3) {
                            /* Encontró 3 comillas*/
                            es_Comentario_largo = true;
                            contador_comillas = 0;
                        }
                    } else {
                        if (contador_comillas == 0){
                            contador_comillas++;
                        } else if (contador_comillas < 3) {
                            if (codigo.charAt(i-1) == "'") {
                                contador_comillas++;
                            } else {
                                contador_comillas = 0;
                                resolve(null);
                            }
                        }
                        if (contador_comillas == 3){
                            es_Comentario_largo = false;
                            contador_comillas = 0;
                        }
                    }
                    break;
                default:
                    if (!es_Comentario_linea && !es_Comentario_largo) {
                        instruccion += caracter;
                        if (i == (codigo.length - 1) ) {
                            array_instrucciones.push(instruccion);
                        }
                    }
                    break;
            }
        }
        if (es_Comentario_largo) {
            texto_salida.value = map_idioma.get('errorComentario');
            resolve(null);
        }
        resolve(array_instrucciones);
    })
}

// Función que muestra el resultado de los testcases que no se han cumplido.
function printearTestCases() {
    return new Promise(function(resolve,reject) {
        /* PONER RESULTADO DE LOS TESTCASES RESTANTES */
        var texto_salida = document.getElementById("output");
        if(casos_prueba.length == 0) { // No hay/quedan testcases.
            resolve();
        } else {
            for (var i = 0; i<casos_prueba.length; i++) {
                if (array_oraculos[i] == map_idioma.get('afirmaNoCae')) {
                    texto_salida.value += '\n' + casos_prueba[i] + ' TRUE';
                } else {
                    texto_salida.value += '\n' + casos_prueba[i] + ' FALSE';
                }
            }
            resolve();
        }
    })
}


// Recibe un array de instrucciones y lo va recorriendo de manera recursiva. Con condicionales, funciona de otra manera.
/**
 * 
 * @param {Array con las instrucciones a ejecutar} instrucciones 
 */
async function crearSecuencia(instrucciones) {
    var btn_parar = document.getElementById("pararprog");	
    var img_player = document.getElementById('robot');
    var img_src = img_player.getAttribute("src");
    if (pararEjecucion) {
        cargar_nivel(nivel_actual, false, true);
        return false;
    }
    if (instrucciones.length == 0) {
        printearTestCases().then(() => {
            return true;
        })
        btn_parar.disabled = true;
    }

    var inst = instrucciones.pop();
	console.log(inst);
	if (inst == null){
      //console.log(inst);
	} else if (inst.charAt(0) == 'w') { // Viene un WHILE
		inst = inst.replace("while_,", "");
        var array_instWhile = inst.split(',');

        for (var i = 0; i < repeticiones_permitidas; i++) {
			for (var j = 0; j < array_instWhile.length; j++) {
				await eval(array_instWhile[j]).then(continuar => {
					if (continuar == true) {
						/* seguir con el bucle */
					} else if (continuar == 3 || continuar == 2) { // nivel superado
						printearTestCases().then(() => {
							return true;
						})
						i = repeticiones_permitidas;
						j = array_instWhile.length;
                        instrucciones = new Array;
                        btn_parar.disabled = true;
					} else { // colisión con pinchos o caer al vacío
						printearTestCases().then(() => {
							return true;
						})
						i = repeticiones_permitidas;
						j = array_instWhile.length;
                        instrucciones = new Array;
                        btn_parar.disabled = true;
					}
				});
			}
        }
		crearSecuencia(instrucciones);
	} else if (inst.charAt(0) == 'r') {   // Viene un condicional, se trata de manera diferente (formato -> condición, instrucciones[])
            var array_temporal = inst.split(',');
            var orientacion_robot = array_temporal[0];
            if (img_src == orientacion_robot) {
                for (var i = 1; i < array_temporal.length; i++) {
                    await eval(array_temporal[i]).then(continuar => {
                        if (continuar == true || continuar == 3) {
                            /* seguir con el bucle */
                        } else if (continuar == 2) { // nivel superado
                            printearTestCases().then(() => {
                                return true;
                            })
                            i = array_temporal.length;
                            instrucciones = new Array;
                            btn_parar.disabled = true;
                        } else { // colisión con pinchos o caer al vacío
                            printearTestCases().then(() => {
                                return true;
                            })
                            i = array_temporal.length;
                            instrucciones = new Array;
                            btn_parar.disabled = true;
                        }
                    });
                }
            }
            crearSecuencia(instrucciones);
    } else {
        // Instrucciones normales
        // Modificar instrucciones en caso de estar el juego en Inglés, para llamar a las funciones que toca (implementado en castellano).
        if (inst.charAt(0) == 'f') {  // sustituir forward(x) -> avanza(x)
            inst = inst.replace("forward", "avanza");
        } else if (inst.charAt(0) == 't') {  // sustituir turn(x) -> gira(x)
            inst = inst.replace("turn", "gira");
        }
        eval(inst).then(continuar => {
            if (continuar == true || continuar == 3) {
                crearSecuencia(instrucciones);
            } else if (continuar == 2) {  // nivel superado
                printearTestCases().then(() => {
                    return true;
                })
                instrucciones = new Array;
                btn_parar.disabled = true;
            } else {  // colisión con pinchos o caer al vacío
                printearTestCases().then(() => {
                    return true;
                })
                instrucciones = new Array;
                btn_parar.disabled = true;
            }
        })
    }
}

async function pararCodigo() {
	pararEjecucion = true;
}

/* Función que se ejecuta al pulsar el botón Ejecutar Código. Compara las instrucciones que ha introducido el usuario con las soluciones más eficientes, y llama
a la función crearSecuencia(), que recorre el array de instrucciones.
*/
function ejecutarCodigo() {
    var btn = document.getElementById("ejecutarprog");
    var btn_parar = document.getElementById("pararprog");
    btn_parar.disabled = false;
	let array_sol1;
	let array_sol2;
	
	// comprobar si los niveles NO aleatorios (1,2,3,6,8,9) han sido superados de la manera más eficiente.
	switch (nivel_actual) {
		case 1:
			array_sol1 = traducirSolucion(array_sol_n1);
			break;
		case 2:			
			array_sol1 = traducirSolucion(array_sol_n2yn3_1);
			array_sol2 = traducirSolucion(array_sol_n2yn3_2);
			break;
		case 3:
			array_sol1 = traducirSolucion(array_sol_n2yn3_1);
			array_sol2 = traducirSolucion(array_sol_n2yn3_2);
			break;
		case 6:
			array_sol1 = traducirSolucion(array_sol_n6_1);
			array_sol2 = traducirSolucion(array_sol_n6_2);
			break;
        case 8:
            array_sol1 = traducirSolucion(array_sol_n8);
            break;    
		case 9:
			array_sol1 = traducirSolucion(array_sol_n9_1);
			array_sol2 = traducirSolucion(array_sol_n9_2);
			break;
		default:
			/* do nothing */
			break; 
	}
	
	validarSolucion(array_sol1, array_sol2);
    
    array_traducido.reverse();
    crearSecuencia(array_traducido);
    btn.disabled = true;
}

function traducirSolucion(array_sol) {
	for (var i=0; i<array_sol.length; i++) {
	    array_sol[i] = array_sol[i].replaceAll('avanza', map_idioma.get('avanza'));
	    array_sol[i] = array_sol[i].replaceAll('gira', map_idioma.get('gira'));
	}
	return array_sol;
}

function validarSolucion(array_sol1, array_sol2) {
    if (array_sol1 != null && array_sol2 == null) 	{
		if (array_traducido.length == array_sol1.length && array_traducido.every((v,i) => v === array_sol1[i])) {
			eficiente = 2;
		} else eficiente = 1;
	} else if (array_sol1 != null && array_sol2 != null) {
		if ((array_traducido.length == array_sol1.length || array_traducido.length == array_sol2.length) && 
		   (array_traducido.every((v,i) => v === array_sol1[i]) || array_traducido.every((v,i) => v === array_sol2[i]))) {
			eficiente = 2;
		} else eficiente = 1;
	}
}

// Función para mover al robot un número de casillas indicado por parámetro. Funciona tanto horizontalmente como verticalmente.
/**
 * @param {Número de casillas a avanzar por el robot} npasos 
 * @returns Promise resolve()/reject()
 *          resolve() -> true: termina la ejecución de avanza de manera natural (sin pararlo)
 *                       false: termina la ejecución de avanza por colisión con pinchos o caída al vacío.
 *                       2: termina la ejecución de avanza por finalizar el nivel.
 */
function avanza(npasos) {
    return new Promise(function(resolve, reject) {
        if (pararEjecucion) {
            cargar_nivel(nivel_actual, false, true);
            clearInterval(id);
            resolve(false);
            return;
        }

		var img_nivel = document.getElementById('corona-nivel' + nivel_actual);
		var img_nivel_src = img_nivel.getAttribute("src");
        var txt_nivel = document.getElementById('txt-nivel' + nivel_actual);
        var img_final = document.getElementById('final');
        var texto_salida = document.getElementById('output');
        var img_player = document.getElementById('robot');
        var img_src = img_player.getAttribute("src");
        var i = 0;
        var j = 0;
        var id = null;
        var x = img_player.offsetLeft;
        var maxPos_left = img_final.offsetLeft;
        var minPos_left = 10;
        var y = img_player.offsetTop;
        var maxPos_top = 5;
        var minPos_top = 305;
        var limite = false;
    
        clearInterval(id);

        if (img_src == imagen_robot_derecha || img_src == imagen_robot_izquierda){
            id = setInterval(framehorizontal, 275);
        }

        if (img_src == imagen_robot_frente || img_src == imagen_robot_espalda) {
            id = setInterval(framevertical, 275);
        }
    
        function framehorizontal(){
            if ( x < maxPos_left && i < npasos) {
                if (img_src == imagen_robot_derecha) {
                    x = x + 60;
                }
                if (img_src == imagen_robot_izquierda && x > minPos_left) {
                    x = x - 60;
                } 
                hayColision(x,1).then(colision => {
                    switch (colision) {
                        case 0:  // no hay colisión 
						    //console.log("sin colisión");
                            img_player.style.left = x + "px";
                            i+=1;
                            break;   
                        case 1:  // colisión obstáculo simple
                            if (array_oraculos.includes(map_idioma.get('afirmaNoAvanza'))) {
                                var indice = array_oraculos.indexOf(map_idioma.get('afirmaNoAvanza'));
                                texto_salida.value += '\n' + casos_prueba[indice] + ' TRUE';
                                array_oraculos.splice(indice, 1);
                                casos_prueba.splice(indice, 1);
                            }
                            resolve(3);
                            clearInterval(id);
                            break;
                        case 2:  // colisión obstáculo pinchos
                            texto_salida.value += '\n' + map_idioma.get('avisoPinchos');
                            if (array_oraculos.includes(map_idioma.get('afirmaPincha'))) {
                                var indice = array_oraculos.indexOf(map_idioma.get('afirmaPincha'));
                                texto_salida.value += '\n' + casos_prueba[indice] + ' TRUE';
                                array_oraculos.splice(indice, 1);
                                casos_prueba.splice(indice, 1);
                            }
                            resolve(false);
                            clearInterval(id); 
                            break;
                        default:
                            break;                  
                    }
                })
            } else {
                resolve(true);
                clearInterval(id);
            }
            if (x == maxPos_left) {
                if (img_player.offsetTop != 180) {  // el robot se ha caído al vacío
                    texto_salida.value += '\n' + map_idioma.get('robotCaido');
                    img_player.src = "suelo_negro.png";
                    if (array_oraculos.includes(map_idioma.get('afirmaNoCae'))) {
                        var indice = array_oraculos.indexOf(map_idioma.get('afirmaNoCae'));
                        texto_salida.value += '\n' + casos_prueba[indice] + ' FALSE';
                        array_oraculos.splice(indice, 1);
                        casos_prueba.splice(indice, 1);
                    }
                    resolve(false);
                    clearInterval(id);
                } else {  // NIVEL COMPLETADO
					if (img_nivel_src != "coronaOK.png") {
						img_nivel.src = "coronaOK.png";
						txt_nivel.style.color = "green";
						niveles_superados = calcular_superados();

                        if (niveles_superados == superados_insignia_1) {
                            ganar_insignia("insignia1");
                        }
                        if (niveles_superados == superados_insignia_2) {
                            ganar_insignia("insignia2");
                        }
                        if (niveles_superados == superados_insignia_3) {
                            ganar_insignia("insignia3");
                        }

                        // Utilizar otro tipo de mensajería? ver animación o imagen agrandada del robot?
						if (niveles_superados == superados_gafas && !premio_ya_ganado("gafas")) {
                            ganar_premio("gafas");
						} 
                        if (niveles_superados == superados_gorrofiesta && !premio_ya_ganado("gorrofiesta")) {
                            ganar_premio("gorrofiesta");
                        }
                        if (niveles_superados == superados_esposas && !premio_ya_ganado("esposas")) {
                            ganar_premio("esposas");
                        }
                        if (niveles_superados == superados_lazo && !premio_ya_ganado("lazo")) {
                            ganar_premio("lazo");
                        }
                        if (niveles_superados == superados_medalla && !premio_ya_ganado("medalla")) {
                            ganar_premio("medalla");
                        }
                        if (niveles_superados == superados_gorro && !premio_ya_ganado("gorro")) {
                            ganar_premio("gorro");
                        }
                        if (niveles_superados == superados_coche && !premio_ya_ganado("coche")) {
                            ganar_premio("coche");
                        }
                        /*if (niveles_superados > superados_gorro){
							imagen_robot_frente = "robot_frente_gafas_gorro.gif";
							imagen_robot_espalda = "robot_espalda_gafas_gorro.gif";
							imagen_robot_derecha = "robot_lateral_gafas_gorro.gif";
							imagen_robot_izquierda = "robot_lateral_atras_gafas_gorro.gif";
                            img_player.src = imagen_robot_frente;
                            if (!con_gorro){
                                con_gorro = true;
                                alert(map_idioma.get('alert_gorro'));
                            }
						}*/
                        if (niveles_superados == num_niveles){
                            document.body.style.backgroundImage = "url('confeti.gif')";
							alert(map_idioma.get('nivelesSuperados'));
						}
					}
					
                    if (eficiente == 0) {  // nivel aleatorio, no se puede comprobar la eficiencia
                        texto_salida.value = map_idioma.get('nivelSuperado');
                    } else if (eficiente == 2) {  // solución eficiente
                        texto_salida.value = map_idioma.get('nivelSuperadoEficiente');
                    } else texto_salida.value = map_idioma.get('nivelSuperadoEficiente');  // solución ineficiente
                    resolve(2);
                }
            }
        }

        function framevertical() {
            if (j < npasos) {
                if (img_src == imagen_robot_espalda && y > maxPos_top) {
                    y = y - 60;
                }
                if (img_src == imagen_robot_frente && y < minPos_top) {
                    y = y + 60;
                }
                hayColision(y,2).then(colision => {
                    switch (colision) {
                        case 0:  // no hay colisión 
                            img_player.style.top = y + "px";
                            j+=1;
                            break;
                        case 1:  // colisión con obstáculo simple
                            if (array_oraculos.includes(map_idioma.get('afirmaNoAvanza'))) {  // si hay un caso de prueba no_avanza, mostrar TRUE.
                                var indice = array_oraculos.indexOf(map_idioma.get('afirmaNoAvanza'));
                                texto_salida.value += '\n' + casos_prueba[indice] + ' TRUE';
                                array_oraculos.splice(indice, 1);
                                casos_prueba.splice(indice, 1);
                            }
                            resolve(3);
                            clearInterval(id);
                            break;
                        case 2:  // colisión obstáculo pinchos
                            texto_salida.value += '\n' + map_idioma.get('avisoPinchos');
                            if (array_oraculos.includes(map_idioma.get('afirmaPincha'))) {
                                var indice = array_oraculos.indexOf(map_idioma.get('afirmaPincha'));
                                texto_salida.value += '\n' + casos_prueba[indice] + ' TRUE';
                                array_oraculos.splice(indice, 1);
                                casos_prueba.splice(indice, 1);
                            }
                            resolve(false);
                            clearInterval(id);
                            break;
                        default:
                            break;  
                    }  
                })
                if (y <= maxPos_top || y >= minPos_top) {
                    if (!limite) {
                        limite = true;
                    } else {
                        if (array_oraculos.includes(map_idioma.get('afirmaChoca'))) {
                            var indice = array_oraculos.indexOf(map_idioma.get('afirmaChoca'));
                            texto_salida.value += '\n' + casos_prueba[indice] + ' TRUE';
                            array_oraculos.splice(indice, 1);
                            casos_prueba.splice(indice, 1);
                            resolve(true);
                            clearInterval(id);
                        } 
                    }
                }
            } else {
                resolve(true);
                clearInterval(id);
            }
        }
    })
}


// Función que provoca que el robot gire mediante cambios de imagen.
/**
 * @param {Número de giros que va a dar el robot} ngiros 
 *        Si ngiros > 0, el robot gira en sentido contrario a las agujas del reloj.
 *        Si ngrios < 0, el robot gira en sentido de las agujas del reloj.
 * @returns Promise resolve()/reject()
 */
function gira(ngiros) {

    return new Promise(function(resolve,reject) {
        if (pararEjecucion) {
            cargar_nivel(nivel_actual, false, true);
            clearInterval(id);
            resolve(false);
            return;
        }

        var i = 1;
        var j;
        var id = null;
        var rotaciones = 0;
        var invertir = false;
        var img_player = document.getElementById('robot');
        var img_src = img_player.getAttribute("src");
    
        if (ngiros < 0) {
            invertir = true;
            ngiros = -ngiros;
        }
    
        clearInterval(id);
        id = setInterval(girar, 350);
    
        function girar(){
            if (ngiros == 0) {
                clearInterval(id);
                resolve(true);
            }
            if (!invertir) {
                switch (img_src) {
                    case imagen_robot_derecha:
                        var giro_espalda = 1;
                        var giro_izq = 2;
                        var giro_frente = 3;
                        var giro_der = 4;
                        break;
                    case imagen_robot_frente:
                        var giro_der = 1;
                        var giro_espalda = 2;
                        var giro_izq = 3;
                        var giro_frente = 4;
                        break;
                    case imagen_robot_izquierda:
                        var giro_frente = 1;
                        var giro_der = 2;
                        var giro_espalda = 3;
                        var giro_izq = 4;
                        break;
                    case imagen_robot_espalda:
                        var giro_izq = 1;
                        var giro_frente = 2;
                        var giro_der = 3;
                        var giro_espalda = 4;
                        break;
                    default:
                        break;
                }
            } else {
                switch (img_src) {
                    case imagen_robot_derecha:
                        var giro_frente = 1;
                        var giro_izq = 2;
                        var giro_espalda = 3;
                        var giro_der = 4;
                        break;
                    case imagen_robot_frente:
                        var giro_izq = 1;
                        var giro_espalda = 2;
                        var giro_der = 3;
                        var giro_frente = 4;
                        break;
                    case imagen_robot_izquierda:
                        var giro_espalda = 1;
                        var giro_der = 2;
                        var giro_frente = 3;
                        var giro_izq = 4;
                        break;
                    case imagen_robot_espalda:
                        var giro_der = 1;
                        var giro_frente = 2;
                        var giro_izq = 3;
                        var giro_espalda = 4;
                        break;
                    default:
                        break;
                }
            }
    
            if (i <= ngiros) {
                j = i - (4*rotaciones);
                switch (j) {
                    case giro_espalda:
                        img_player.src = imagen_robot_espalda;
                        break;
                    case giro_izq:
                        img_player.src = imagen_robot_izquierda;
                        break;
                    case giro_frente:
                        img_player.src = imagen_robot_frente;
                        break;
                    case giro_der:
                        img_player.src = imagen_robot_derecha;
                        rotaciones++;
                        break;
                    default:
                        break;
                    }
                i++;
            } else {
                resolve(true);
                clearInterval(id);
            }
        }
    })

}

// Función que hace una comparación exacta con una regular expresion.
/**
 * @param {Expresión regular} r 
 * @param {Cadena a comparar con la expresión regular r} str 
 * @returns true si str hace un match exacto con r // false en los demás casos
 */
function matchExact(r, str) {
    var match = str.match(r);
    return match && str === match[0];
}

// Función para añadir las instrucciones del array while.
/**
 * @param {Array con las instrucciones dentro del while} array 
 * @param {Condición de la instrucción} condicion 
 * @returns Promise resolve()/reject()
 */
function crearArrayWhile(array, condicion) {
    return new Promise(function(resolve, reject) {
        if (array.length == 0) {
            resolve();
        } 
		var instrucciones = "";
        for (var i = 0; i < array.length; i++) {
            var inst = array[i];
            if (inst.charAt(0) == 'f') {  // sustituir forward(x) -> avanza(x)
                inst = inst.replace("forward", "avanza");
            } else if (inst.charAt(0) == 't') {  // sustituir turn(x) -> gira(x)
                inst = inst.replace("turn", "gira");
            }    
            instrucciones += ',' + inst;
        }		
		array_traducido.push('while_' + instrucciones);		
        resolve();
    })
}

// Función para añadir las instrucciones del array bucle multiplicadas n veces al array de instrucciones cuando hay un repite(x).
/**
 * @param {Array con las instrucciones dentro de la estructura repite(x)} array 
 * @param {array de longitud 1 que contiene el número de veces que hay que multiplicar el array.} nrepeticiones 
 * @returns Promise resolve()/reject()
 */
function crearArrayBucle(array, nrepeticiones) {
    return new Promise(function(resolve, reject) {
        if (array.length == 0) {
            resolve();
        } else {
            var rep = nrepeticiones[0];
            // bucle para multiplicar el array por el número de instrucciones (rep*array.length)
            for (var i = 0; i < rep; i++) {
                for (var j = 0; j < array.length; j++) {
                    array_traducido.push(array[j]);
                }
            }
            resolve(); 
        }
    })
}

// Función que analiza el array de instrucciones dentro de un condicional.
/**
 * @param {Aray con las instrucciones dentro del condicional} array 
 * @param {Orientación del robot que condiciona la ejecución de las instrucciones} condicion 
 * @returns Promise resolve()/reject()
 */
function crearArrayCondicional(array, condicion) {
    return new Promise(function(resolve, reject) {
        var inst_norte = imagen_robot_derecha;
        var inst_sur = imagen_robot_izquierda;
        var inst_este = imagen_robot_frente;
        var inst_oeste = imagen_robot_espalda;

        condicion = condicion.substring(0, condicion.length - 2); // quitamos caracteres sobrantes

        if (array == []) {
            resolve();
        }

        for (var i = 0; i < array.length; i++) {
            var inst = array[i];
            if (inst.charAt(0) == 'f') {  // sustituir forward(x) -> avanza(x)
                inst = inst.replace("forward", "avanza");
            } else if (inst.charAt(0) == 't') {  // sustituir turn(x) -> gira(x)
                inst = inst.replace("turn", "gira");
            }
    
            switch (condicion) {
                case map_idioma.get('robotNorte'):
                    // concidicón robot_norte
                    inst_norte += ',' + inst;
                    break;

                case map_idioma.get('robotSur'):
                    // concidicón robot_sur
                    inst_sur += ',' + inst;
                    break;

                case map_idioma.get('robotEste'):
                    // concidicón robot_este
                    inst_este += ',' + inst;
                    break;

                case map_idioma.get('robotOeste'):
                    // concidicón robot_oeste
                    inst_oeste += ',' + inst;
                    break;
            }
        }

        // Verificar que instrucción hay que añadir al array, dependiendo de la condición del si()
        if (inst_norte != imagen_robot_derecha) {
            array_traducido.push(inst_norte);
        } else if (inst_sur != imagen_robot_izquierda) {
            array_traducido.push(inst_sur);
        } else if (inst_este != imagen_robot_frente) {
            array_traducido.push(inst_este);
        } else if (inst_oeste != imagen_robot_espalda) {
            array_traducido.push(inst_oeste);
        }

        resolve();
    })
}

// Función que analiza un array para crear los casos de prueba en caso de encontrarse un testcase.
/**
 * @param {Array que contiene el identificador y las instrucciones de un testcase} array 
 * @param {Oráculo del testcase} oraculo 
 * @returns Promise resolve()/reject()
 */
function crearTestCase(array, oraculo) {
    return new Promise(function(resolve,reject) {
        var texto_salida = document.getElementById('output');
        if (oraculo == "") {
            if (error_inst) {
                /* no printear error */
            } else {
                texto_salida.value = map_idioma.get('errorTestcase');
            }
            resolve(false);
        }

        if (casos_prueba.includes(array[0])) {  // El identificador de los testcases tiene que ser diferente.
            texto_salida.value = map_idioma.get('errorIdentificador1') + array[0].slice(0,-1) + map_idioma.get('errorIdentificador2');
            resolve(false);
        } else {
            casos_prueba.push(array[0]);
            array_oraculos.push(oraculo);
        }

        for(var i = 1; i<array.length; i++) {
            array_traducido.push(array[i]);
        }

        resolve(true);
    })
}

// Función que valida cada línea de código del panel de código.
/**
 * @param {Array que contiene cada línea del panel de código} array 
 * @returns Promise resolve()/reject()
 */
async function comprobarArray(array) {
    return new Promise(function(resolve,reject) {
        var texto_salida = document.getElementById('output');
        var terminado = false;
        var es_bucle = false;
        var es_condicional = false;
        var repeticiones = 0;
        var condicion = "";
        var es_tc = false;
        var es_while = false;

        const start = async () => {
            await asyncForEach(array, async (instruccion) => {
                await new function() {
                    // si la instruccion no hace Match con ninguna de estas expresiones, ERROR DE COMPILACIÓN.
                    var concuerda_avanza = matchExact(map_regex.get('avanza'), instruccion);
                    var concuerda_gira1 = matchExact(map_regex.get('gira_der'), instruccion);
                    var concuerda_gira2 = matchExact(map_regex.get('gira_izq'), instruccion);
                    var concuerda_repite = matchExact(map_regex.get('repite'), instruccion);
                    var concuerda_si_sur = matchExact(map_regex.get('si_robot_sur'), instruccion);
                    var concuerda_si_norte = matchExact(map_regex.get('si_robot_norte'), instruccion);
                    var concuerda_si_este = matchExact(map_regex.get('si_robot_este'), instruccion);
                    var concuerda_si_oeste = matchExact(map_regex.get('si_robot_oeste'), instruccion);
                    var concuerda_repite_ident = matchExact(map_regex.get('repite_identado'), instruccion);
                    var concuerda_avanza_ident = matchExact(map_regex.get('avanza_identado'), instruccion);
                    var concuerda_gira1_ident = matchExact(map_regex.get('gira_der_identado'), instruccion);
                    var concuerda_gira2_ident = matchExact(map_regex.get('gira_izq_identado'), instruccion);
                    var concuerda_si_sur_ident = matchExact(map_regex.get('si_robot_sur_identado'), instruccion);
                    var concuerda_si_norte_ident = matchExact(map_regex.get('si_robot_norte_identado'), instruccion);
                    var concuerda_si_este_ident = matchExact(map_regex.get('si_robot_este_identado'), instruccion);
                    var concuerda_si_oeste_ident = matchExact(map_regex.get('si_robot_oeste_identado'), instruccion);
                    var concuerda_testcase = matchExact(map_regex.get('testcase'), instruccion);
                    var concuerda_testcase_ident = matchExact(map_regex.get('testcase_identado'), instruccion);
                    var concuerda_assert_noav = matchExact(map_regex.get('afirma_no_avanza'), instruccion);
                    var concuerda_assert_nopi = matchExact(map_regex.get('afirma_pincha'), instruccion);
                    var concuerda_assert_choca = matchExact(map_regex.get('afirma_choca'), instruccion);
                    var concuerda_assert_nocae = matchExact(map_regex.get('afirma_no_cae'), instruccion);
                    var concuerda_mientras_no_choca = matchExact(map_regex.get('mientras_no_choca'), instruccion);
                    var concuerda_mientras_no_choca_ident = matchExact(map_regex.get('mientras_no_choca_identado'), instruccion);

                    if (es_bucle) {
                        // instrucciones dentro de la estructura iterativa repite():
                        if (concuerda_avanza_ident || concuerda_gira1_ident || concuerda_gira2_ident) {
                        instruccion = instruccion.substring(2); // hay que filtrar los espacios (2 espacios antes de la instrucción)
                        array_bucle.push(instruccion);
                        } else if (concuerda_repite_ident)  { // no soporta bucles dentro de otro bucle
                            texto_salida.value = map_idioma.get('errorRepite');
                            resolve(false);
                        } else if (concuerda_si_norte_ident|| concuerda_si_este_ident || concuerda_si_sur_ident || concuerda_si_oeste_ident) {  // no soporta combinación de estructuras
                            texto_salida.value = map_idioma.get('errorCondicionalRepite');
                            resolve(false);
                        } else if (concuerda_avanza || concuerda_gira1 || concuerda_gira2) {  // instrucciones sin espacios, fuera del bucle
                            es_bucle = false;
                            crearArrayBucle(array_bucle, repeticiones).then(() => {
                                array_bucle = [];
                                array_traducido.push(instruccion);
                            })
                        } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste) {  // fin de bucle, inicio de condicional
                            es_bucle = false;
                            crearArrayBucle(array_bucle, repeticiones).then(() => {
                                array_bucle = [];
                                es_condicional = true;
                                condicion = instruccion.substring(3);
                            })
                        } else if (concuerda_repite) {  // inicio de otro bucle
                            crearArrayBucle(array_bucle, repeticiones).then(() => {
                                array_bucle = [];
                                repeticiones = instruccion.match(/\d+/);
                            })
                        } else if (concuerda_testcase) {         // inicio de un caso de prueba
                            crearArrayBucle(array_bucle, repeticiones).then(() => {
                                array_bucle = [];
                                es_tc = true;
                                array_tcases.push(instruccion);
                            })
                        } else if (concuerda_mientras_no_choca) { // inicio de un WHILE
                            crearArrayBucle(array_bucle, repeticiones).then(() => {
                                array_bucle = [];
                                es_while = true;
                                array_while.push(instruccion);
                            })
                        } else {  // ERROR
                            terminado = depurarError(instruccion);
                            while (!terminado) {
                                terminado = depurarError(instruccion);
                            }
                            resolve(false);
                        }
                    } else if (es_condicional) {
                        // instrucciones dentro de estructura condicional si():    
                        if (concuerda_avanza_ident || concuerda_gira1_ident || concuerda_gira2_ident) {
                            instruccion = instruccion.substring(2); // hay que filtrar los espacios (2 espacios antes de la instrucción)
                            array_condicional.push(instruccion);
                        } else if (concuerda_repite_ident) {  // no soporta combinación de estructuras
                            texto_salida.value = map_idioma.get('errorBucle');
                        } else if (concuerda_avanza || concuerda_gira1 || concuerda_gira2) {  // instrucciones sin espacios, no dependen del condicional
                            es_condicional = false;
                            crearArrayCondicional(array_condicional, condicion).then(() => {
                                array_condicional = [];
                                array_traducido.push(instruccion);
                            })
                        } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste) { // inicio de otro condicional 
                            crearArrayCondicional(array_condicional, condicion).then(() => {
                                condicion = instruccion.substring(3);
                                array_condicional = [];
                                otro_condicional = true;
                            })
                        } else if (concuerda_repite) {  // fin de condicional, inicio de bucle
                            es_condicional = false;
                            crearArrayCondicional(array_condicional, condicion).then(() => {
                                array_condicional = [];
                                es_bucle = true;
                                repeticiones = instruccion.match(/\d+/);
                            })
                        } else if (concuerda_si_norte_ident|| concuerda_si_este_ident || concuerda_si_sur_ident || concuerda_si_oeste_ident) { // no puede haber más condiciones dentro de una condición
                            texto_salida.value = map_idioma.get('errorCondicional');
                            resolve(false);
        
                        } else {  // ERROR
                            terminado = depurarError(instruccion);
                            while (!terminado) {
                                terminado = depurarError(instruccion);
                            }
                            resolve(false);
                        }
                    } else if (es_tc) {
                        // instrucciones dentro de un testcase
                        if (concuerda_avanza || concuerda_gira1 || concuerda_gira2) {  // instrucciones no identadas. ERROR
                            texto_salida.value = map_idioma.get('errorTestcaseIdentacion');
                            resolve(false);
                        } else if (concuerda_repite || concuerda_repite_ident) {  // bucles no soportados en testcases. ERROR
                            texto_salida.value = map_idioma.get('errorTestcaseBucles');
                            resolve(false);
                        } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste || concuerda_si_norte_ident|| concuerda_si_este_ident || concuerda_si_sur_ident || concuerda_si_oeste_ident) {  // condicionales no soportados
                            texto_salida.value = map_idioma.get('errorTestcaseCondidiones');
                            resolve(false);
                        } else if (concuerda_testcase || concuerda_testcase_ident) {  // testcase sin cerrar el actual. ERROR.
                            texto_salida.value = map_idioma.get('errorTestcaseCombinados');
                            resolve(false);
                        } else if (concuerda_avanza_ident || concuerda_gira1_ident || concuerda_gira2_ident) {  // instruccion identada. OK
                            instruccion = instruccion.substring(2);
                            array_tcases.push(instruccion);
                        } else if (concuerda_assert_choca || concuerda_assert_noav || concuerda_assert_nocae || concuerda_assert_nopi) { // afirma final. OK.
                            crearTestCase(array_tcases, instruccion).then((correcto) => {
                                if (correcto) {
                                    es_tc = false;
                                    array_tcases = [];
                                } else {
                                    resolve(false);
                                }
                            })
                        } else {  // ERROR
                            terminado = depurarError(instruccion);
                            while (!terminado) {
                                terminado = depurarError(instruccion);
                            }
                            resolve(false);
                        }
                    } else if (es_while) {
                        // instrucciones dentro de la estructura iterativa while():
                        if (concuerda_avanza_ident || concuerda_gira1_ident || concuerda_gira2_ident) {
                            instruccion = instruccion.substring(2); // hay que filtrar los espacios (2 espacios antes de la instrucción)
                            array_while.push(instruccion);
                        } else if (concuerda_mientras_no_choca_ident) { // no soporta whiles dentro de otro while
                            texto_salida.value = map_idioma.get('errorWhile');
                            resolve(false);
                        } else if (concuerda_repite_ident)  { // no soporta bucles dentro de otro bucle
                            texto_salida.value = map_idioma.get('errorWhileBucle');
                            resolve(false);
                        } else if (concuerda_si_norte_ident|| concuerda_si_este_ident || concuerda_si_sur_ident || concuerda_si_oeste_ident) {  // no soporta combinación de estructuras
                            texto_salida.value = map_idioma.get('errorWhileCondiciones');
                            resolve(false);
                        } else if (concuerda_avanza || concuerda_gira1 || concuerda_gira2) {  // instrucciones sin espacios, fuera del while
                            es_while = false;
                            crearArrayWhile(array_while, repeticiones).then(() => {
                                array_while = [];
                                array_traducido.push(instruccion);
                            })
                        } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste) {  // fin de while, inicio de condicional
                            es_while = false;
                            crearArrayWhile(array_while, repeticiones).then(() => {
                                array_while = [];
                                es_condicional = true;
                                condicion = instruccion.substring(3);
                            })
                        } else if (concuerda_repite) {  // inicio de otro bucle
                            es_while = false;
                            crearArrayWhile(array_while, repeticiones).then(() => {
                                array_while = [];
                                es_bucle = true;
                                repeticiones = instruccion.match(/\d+/);
                            })
                        } else if (concuerda_testcase) {         // inicio de un caso de prueba
                            es_while = false;
                            crearArrayWhile(array_while, repeticiones).then(() => {
                                array_while = [];
                                es_tc = true;
                                array_tcases.push(instruccion);
                            })     
                        // TODO: no añade las instrucciones bien.                       
                        } else if (concuerda_mientras_no_choca) { // inicio de un WHILE
                            crearArrayBucle(array_bucle, repeticiones).then(() => {
                                array_bucle = [];
                                es_while = true;
                                array_while.push(instruccion);
                            })
                        //} else if (concuerda_mientras_no_choca) { // no puede haber más mientras dentro de un mientras
                        //    texto_salida.value = 'ERROR WHILE 3'; // map_idioma.get('errorCondicional');
                        //    resolve(false);                            
                        } else {  // ERROR
                            terminado = depurarError(instruccion);
                            while (!terminado) {
                                terminado = depurarError(instruccion);
                            }
                            resolve(false);
                        }						
                    } else {
                        // si la instrucción no está dentro de bucle ni condicional ni de un caso de prueba
                        if (concuerda_avanza || concuerda_gira1 || concuerda_gira2) {  // instrucción para pushear directamente al array
                            array_traducido.push(instruccion);
                        } else if (concuerda_repite) {  // es un bucle
                            es_bucle = true;
                            repeticiones = instruccion.match(/\d+/);
                        } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste) {  // es un condicional
                            es_condicional = true;
                            condicion = instruccion.substring(3);
                        } else if (concuerda_testcase) {  // inicio de un testcase
                            es_tc = true;
                            array_tcases.push(instruccion);
                        } else if (concuerda_mientras_no_choca) { // MIENTRAS
                            es_while = true;							
                            condicion = 'no_choca'; // TODO: instruccion.substring(9);
                            //array_while.push(instruccion);
                        } else {  // ERROR
                            terminado = depurarError(instruccion);
                            while (!terminado) {
                                terminado = depurarError(instruccion);
                            }
                            resolve(false);
                        }
                    }
                }
            });


            if (es_bucle) {
                crearArrayBucle(array_bucle, repeticiones).then(() => {
                    resolve(true);
                })
            } else if (es_condicional) {
                crearArrayCondicional(array_condicional, condicion).then(() => {
                    resolve(true);
                })
            } else if (es_tc) { 
                crearTestCase(array_tcases, "").then(() => {
                    resolve(false);
                })
            } else if (es_while) { 
                crearArrayWhile(array_while, condicion).then(() => {
                    resolve(true);
                })
            } else {
                resolve(true);
            }
        }

        start();
    });
}


// Función para dar información del error que hay en el código respecto a lo que ha introducido el usuario.
/**
 * @param {String con la línea de código que causó el error} instruccion_actual 
 * @returns True para indicar la finalización del análisis del error.
 */
function depurarError(instruccion_actual) {

    var error_parentesis1_av = instruccion_actual.match(map_regex.get('error_avanza1'));
    var error_parentesis2_av = instruccion_actual.match(map_regex.get('error_avanza2'));
    var error_parentesis1_gi = instruccion_actual.match(map_regex.get('error_gira1'));
    var error_parentesis2_gi = instruccion_actual.match(map_regex.get('error_gira2'));
    var error_parentesis3_gi = instruccion_actual.match(map_regex.get('error_gira3'));
    var error_parentesis4_gi = instruccion_actual.match(map_regex.get('error_gira4'));
    var error_parametro_av = instruccion_actual.match(map_regex.get('error_avanza3'));
    var error_parametro_gira = instruccion_actual.match(map_regex.get('error_gira5'));
    var error_parametro_repite = instruccion_actual.match(map_regex.get('error_repite'));
    var error_parametro_si = instruccion_actual.match(map_regex.get('error_if'));
    var error_parametro_general = instruccion_actual.match(map_regex.get('error_general'));
    var error_instruccion_nostruct_pos = instruccion_actual.match(map_regex.get('error_nostruc_pos'));
    var error_instruccion_nostruct_neg = instruccion_actual.match(map_regex.get('error_nostruc_neg'));
    var error_instruccion_nostruct_str = instruccion_actual.match(map_regex.get('error_nostruc_str'));
    var error_instruccion_struct_num = instruccion_actual.match(map_regex.get('error_struc_num'));
    var error_instruccion_struct_str = instruccion_actual.match(map_regex.get('error_struc_str'));
    var error_repite_puntos = matchExact(map_regex.get('error_repite_puntos'), instruccion_actual);
    var error_si_puntos = matchExact(map_regex.get('error_if_puntos'), instruccion_actual);
    var error_condicion = matchExact(map_regex.get('error_condicion'), instruccion_actual);
    var error_assert_noident_1 = instruccion_actual.match(map_regex.get('error_assert_noident_1'));
    var error_assert_noident_2 = instruccion_actual.match(map_regex.get('error_assert_noident_2'));
    var error_assert_noident_3 = instruccion_actual.match(map_regex.get('error_assert_noident_3'));
    var error_assert_noident_4 = instruccion_actual.match(map_regex.get('error_assert_noident_4'));
    var error_oraculo = instruccion_actual.match(map_regex.get('error_oraculo'));
    var error_tc_puntos = matchExact(map_regex.get('error_testcase_puntos'), instruccion_actual);
    var error_av_tipo = instruccion_actual.match(map_regex.get('error_tipo_avanza'));
    var error_gi_tipo = instruccion_actual.match(map_regex.get('error_tipo_gira'));
    var error_re_tipo = instruccion_actual.match(map_regex.get('error_tipo_repite'));
    var error_si_tipo = instruccion_actual.match(map_regex.get('error_tipo_si'));
    var error_af_tipo = instruccion_actual.match(map_regex.get('error_tipo_afirma'));
    var texto_salida = document.getElementById('output');

    if (error_inst) {
        return true;
    }


    if (error_parentesis1_av != null || error_parentesis2_av != null || error_parentesis1_gi != null || error_parentesis2_gi != null || error_parentesis3_gi != null || error_parentesis4_gi != null) { // error paréntesis
        texto_salida.value = map_idioma.get('errorParentesis');
        error_inst = true;
    } else if (error_parametro_av != null || error_parametro_gira != null || error_parametro_repite != null || error_parametro_si != null) { // parámetro no encontrado
        texto_salida.value = map_idioma.get('errorParametro');
        error_inst = true;
    } else if (error_instruccion_nostruct_pos != null || error_instruccion_nostruct_neg != null || error_parametro_general != null || error_instruccion_nostruct_str != null || error_tc_puntos) { // instruccion no existente
        if (error_repite_puntos || error_si_puntos || error_tc_puntos) {  // caracter : no usado en estructuras repite, condicional y testcase
            texto_salida.value = map_idioma.get('errorEstructura');
        } else {
            texto_salida.value = map_idioma.get('errorInstruccion1') + instruccion_actual + map_idioma.get('errorInstruccion2');
        }
        error_inst = true;
    } else if (error_condicion) {  // no existe la condición
        texto_salida.value = map_idioma.get('errorCondicionNoExiste');
        error_inst = true;
    } else if (error_instruccion_struct_num != null || error_instruccion_struct_str != null) {  // estructura errónea
        texto_salida.value = map_idioma.get('errorEstructuraNoExiste');
        error_inst = true;
    } else if (error_assert_noident_1 != null || error_assert_noident_2 != null || error_assert_noident_3 != null || error_assert_noident_4 != null)  {  // assert no identada
        texto_salida.value = map_idioma.get('errorAfirnaIdentado');
        error_inst = true;
    } else if (error_oraculo != null) { // oráculo en el assert no válido
        texto_salida.value = map_idioma.get('errorOraculoNoExiste');
        error_inst = true;
    } else if (error_av_tipo != null || error_gi_tipo != null || error_re_tipo != null || error_si_tipo != null || error_af_tipo != null) { // tipo del parámetro erróneo
        texto_salida.value = map_idioma.get('errorParametroNoExiste');
        error_inst = true;
    }

    return true;
}


// Función que detecta colisiones del robot con obstáculos.
/**
 * @param {Coordenada actual del robot en el tablero} pos_actual 
 * @param {Número que indica el eje donde se está moviendo actualmente el robot} direccion 
 *        direccion == 1: el robot se está moviendo en el eje x
 *        direccion == 2: el robot se está moviendo en el eje y
 * @returns Promise resolve()/reject()
 *              resolve() -> 1: colisión con obstáculo sencillo
 *                           2: colisión con obstáculo de pinchos
 */
function hayColision(pos_actual, direccion) {
    return new Promise(function(resolve, reject) {
        var img_player = document.getElementById('robot');
        var pos_posible_colisiony = img_player.offsetTop + 5;
        var pos_posible_colisionx = img_player.offsetLeft;

        //console.log("direccion: " + direccion);
        switch (direccion) {
            case 1:
                // comprobar colision horizontal
                array_obstaculos.forEach(obstaculo => {
                    var obs_src = obstaculo.getAttribute("src");
				//console.log("obstaculo: " + obstaculo);
				//console.log("obs_src: " + obs_src);
                    if (pos_actual == obstaculo.offsetLeft && pos_posible_colisiony == obstaculo.offsetTop) {  
                        switch (obs_src) {
                            case "obs.gif":
                                resolve(1);
                                break;
                            case "pinchos.gif":
                                resolve(2);
                                break;
                            default:
                                /* do nothing */
                        }
                    }
                });
                resolve(0);
                break;

            case 2:
                // comprobar colision vertical
                array_obstaculos.forEach(obstaculo => {
                    var obs_src = obstaculo.getAttribute("src");
                    if ((pos_actual + 5) == obstaculo.offsetTop && pos_posible_colisionx == obstaculo.offsetLeft) {  
                        switch (obs_src) {
                            case "obs.gif":
                                resolve(1);
                                break;
                            case "pinchos.gif":
                                resolve(2);
                                break;
                            default:
                                /* do nothing */
                        }
                    }
                });
                resolve(0);
                break;

            default:
                reject();
                break;
        }
    })
}

// Implementación de forEach asíncrono para garantizar iteraciones ordenadas.
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

// Función para vaciar el nivel de obstáculos y resetear al robot, llamada al cargar cada nivel.
/**
 * @returns true si el nivel está limpiado completamente // false si todavía faltan obstáculos por limpiar
 */
function limpiar_nivel(esParada) {
        var id = null;
        var escenario = document.getElementById('escenario');
        var texto_salida = document.getElementById('output');
        var img_player = document.getElementById('robot');
        var btn = document.getElementById('ejecutarprog');
        var btn_parar = document.getElementById('pararprog');

        btn.disabled = true;
        btn_parar.disabled = true;
        casos_prueba = [];
        array_oraculos = [];
        img_player.style.left = "10px";
        img_player.style.top = "180px";
        img_player.src = imagen_robot_derecha;

        if (!esParada)
            texto_salida.value = "";

        for (var i = 0; i < array_obstaculos.length; i++) {
            id = array_obstaculos.pop();
            escenario.removeChild(id);
        }

        if (array_obstaculos.length == 0) {
            return true;
        }
        return false;
}

function iniciar_nivel(nivel, prim_ejecucion, esParada) {
    pararEjecucion = true;//pararCodigo();
    document.body.style.backgroundImage = "";
    var btn = document.getElementById('ejecutarprog');
    var btn_parar = document.getElementById('pararprog');
    var btn_usuario = document.getElementById('usuario');
    var texto_py = document.getElementById('tarea');
    var texto_salida = document.getElementById("output");
    for(var i=1; i<=num_niveles; i++) {
        var txt_nivel = document.getElementById('txt-nivel'+i);
        var img_nivel = document.getElementById('corona-nivel'+i);
        var img_nivel_src = img_nivel.getAttribute("src");
        txt_nivel.style.color = img_nivel_src == "coronaOK.png" ? "green" : "rgb(150, 152, 154)";
    }
    var txt_niv = document.getElementById('txt-'+nivel);
    txt_niv.style.color = "darkred";
    var img_brujula = document.getElementById('brujula');
	img_brujula.style.height = nivel_actual >= 7 ? '85px' : '0px';
	img_brujula.style.width = nivel_actual >= 7 ? '85px' : '0px';

    var continuar;
    pararEjecucion = false;
    btn_parar.disabled = true;
	
    if (!prim_ejecucion) {
        continuar = limpiar_nivel(false);
        while (!continuar) {
            continuar = limpiar_nivel(false);
        }
    } else {
		cambiarIdioma("esp");
		btn.disabled = true;
		texto_salida.value = "";
	}
    if (!esParada)
        texto_py.value = map_idioma.get(nivel);        
}

function calcular_superados(){
    var niveles_superados=0;
    for(var i=1; i<=num_niveles; i++) {
		var img_nivel = document.getElementById('corona-nivel'+i);
        var img_nivel_src = img_nivel.getAttribute("src");
        if (img_nivel_src == "coronaOK.png") 
            niveles_superados++;
    }
    return niveles_superados;
}

function seleccionar_premio(nombre) {
    var obj = document.getElementById(nombre);
    var obj_src = obj.getAttribute("src");
    if (obj_src != nombre+"KO.png")
    {
        if(nombre=="gorrofiesta" || nombre=="gorro" || nombre=="lazo")
            obj_cabeza = obj_cabeza=="_"+nombre ? "" : "_"+nombre;
        else if(nombre=="esposas" || nombre=="coche" || nombre=="medalla")
            obj_pies = obj_pies=="_"+nombre ? "" : "_"+nombre;
        else
            obj_cuerpo = obj_cuerpo=="_"+nombre ? "" : "_"+nombre;

        imagen_robot_frente = "robot_frente"+obj_cabeza+obj_cuerpo+obj_pies+".gif";
        imagen_robot_espalda = "robot_espalda"+obj_cabeza+obj_cuerpo+obj_pies+".gif";
        imagen_robot_derecha = "robot_lateral"+obj_cabeza+obj_cuerpo+obj_pies+".gif";
        imagen_robot_izquierda = "robot_lateral_atras"+obj_cabeza+obj_cuerpo+obj_pies+".gif";
        var img_player = document.getElementById('robot');
        img_player.src = imagen_robot_frente;
    }
}

function ganar_premio(nombre){
    var obj = document.getElementById(nombre);
    obj.src=nombre+"OK.png";
    seleccionar_premio(nombre);    
    alert(map_idioma.get('alert_' + nombre));
}

function premio_ya_ganado(nombre){
    var obj = document.getElementById(nombre);
    var obj_src = obj.getAttribute("src");
    return obj_src == nombre+"OK.png";
}

function ganar_insignia(nombre){
    var obj = document.getElementById(nombre);
    obj.src=nombre+".png";
}

function cambiarUsuario(msg, myYes) {
    localStorage.setItem('nombre', prompt('Por favor, indica tu nombre.'));
    //var confirmBox = document.getElementById("confirm");
    //confirmBox.find(".message").text(msg);
    //confirmBox.find(".yes").unbind().click(function() {
    //    confirmBox.hide();
    //});
    //confirmBox.find(".yes").click(myYes);
    confirmBox.show();
}

function mostrarClasificacion() {
    alert(localStorage.getItem('nombre') +' has superado ' + niveles_superados + ' niveles.');
    //file=fopen(getScriptPath(),0);
    //var fso = new ActiveXObject("Scripting.FileSystemObject");
    //var s = fso.OpenTextFile("C:\\example.txt", 1, true);
    //var fs = require("fs");
    //console.log(" Writing into an file ");
}