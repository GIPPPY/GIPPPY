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
const num_niveles = 12;
var eficiente = 0;
var idioma = "";
var array_obstaculos = new Array;
var array_instrucciones = new Array;
var array_traducido = new Array;
var array_bucle = new Array;
var array_condicional = new Array;
var array_idioma = new Array;
var array_tcases = new Array;
var casos_prueba = new Array;
var array_oraculos = new Array;
var error_inst = false;


// Función para cambiar el idioma del juego.
/**
 * @param {Idioma deseado para el juego} lang 
 */
function cambiarIdioma(lang) {
    var h4 = document.getElementById("h4_inicio");
    var btn_trad = document.getElementById("traducirprog");
    var btn = document.getElementById('ejecutarprog');
    var btn_anivel = document.getElementById("anivel");
    var btn_rnivel = document.getElementById("rnivel"); 
    var texto_py = document.getElementById('tarea');

    switch (lang) {  // preparado para añadir los lenguajes que haya diseñados.
        case "esp":
            array_idioma = array_esp;
            idioma = "español";
            break;
        case "eng":
            array_idioma = array_eng;
            idioma = "ingles";
            break;
        default:
            break;
    }

    // Texto del h4 y los botones cambiado al idioma apropiado.
    h4.innerHTML = array_idioma[0];
    btn_trad.value = array_idioma[1];
    btn.value = array_idioma[2];
    btn_rnivel.value = array_idioma[3];
    btn_anivel.value = array_idioma[4];

    // iniciar el contenido en el idioma apropiado para el panel de código cuando hagamos click.
    switch(nivel_actual) {
        case 1:
            texto_py.value = array_idioma[5];
            break;
        case 2:
            texto_py.value = array_idioma[6];  
            break;
        case 3:
            texto_py.value = array_idioma[7];  
            break;
        case 4:
            texto_py.value = array_idioma[8];  
            break;
        case 5:
            texto_py.value = array_idioma[9];  
            break;
        case 6:
            texto_py.value = array_idioma[10];  
            break;
        case 7:
            texto_py.value = array_idioma[11];  
            break;
        case 8:
            texto_py.value = array_idioma[12];  
            break;
        case 9:
                texto_py.value = array_idioma[13];  
                break;
        case 10:
                texto_py.value = array_idioma[14];  
                break;
        case 11:
            texto_py.value = array_idioma[15];  
            break;
        case 12:
            texto_py.value = array_idioma[16];  
            break;
        default:
            /* do nothing */
            break;
    }
}


// prim_ejecucion, si TRUE no hay que limpiar el nivel, si FALSE limpiar el nivel.
/**
 * @param {Nivel actual del juego} nivel 
 * @param {Booleano para indicar si el juego se acaba de iniciar o no} prim_ejecucion 
 */
function cargar_nivel(nivel, prim_ejecucion) {
    var texto_py = document.getElementById('tarea');
    var texto_salida = document.getElementById("output");
    var escenario = document.getElementById('escenario');
    var btn = document.getElementById('ejecutarprog');
    var continuar;

    switch(nivel) {
        case 1:
            // NIVEL 1
            if (!prim_ejecucion) {
                continuar = limpiar_nivel();
                while (!continuar) {
                    continuar = limpiar_nivel();
                }
            } else {
                cambiarIdioma("esp");
                btn.disabled = true;
                texto_salida.value = "";
            }

            texto_py.value = array_idioma[5];
        
            for (var i=0; i<9; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '125px';
                img.style.zIndex = 6;
                img.style.left = 10 + 60*i + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<9; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '245px';
                img.style.zIndex = 6;
                img.style.left = 10 + 60*i + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            break;

        case 2:
            // NIVEL 2
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[6];

            var obs = new Image();
            obs.src = "obs.gif";
            obs.style.height = '50px';
            obs.style.width = '50px';
            obs.style.position = 'absolute';
            obs.style.top = '185px';
            obs.style.zIndex = 6;
            obs.style.left = '250px';
            array_obstaculos.push(obs);
            escenario.appendChild(obs);

            for (var i=0; i<3; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '5px';
                img.style.zIndex = 6;
                img.style.left = 10 + 180*i + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }
            for (var i=0; i<3; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '365px';
                img.style.zIndex = 6;
                img.style.left = 10 + 180*i + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            break;

        case 3:
            // NIVEL 3
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[7];

            var obs = new Image();
            obs.src = "pinchos.gif";
            obs.style.height = '50px';
            obs.style.width = '50px';
            obs.style.position = 'absolute';
            obs.style.top = '185px';
            obs.style.zIndex = 6;
            obs.style.left = '250px';
            array_obstaculos.push(obs);
            escenario.appendChild(obs);

            for (var i=0; i<3; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '5px';
                img.style.zIndex = 6;
                img.style.left = 10 + 180*i + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }
            for (var i=0; i<3; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '365px';
                img.style.zIndex = 6;
                img.style.left = 10 + 180*i + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }
            break;
            
        case 4:
            // NIVEL 4 -->  ALEATORIO
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[8];
            var x = Math.floor((Math.random() * 7) + 1);
            var i = 0;
            var j = 0;

            while (i<6){
                // el valor de x decide aleatoriamente donde habrá un hueco
                if (x == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "obs.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '130px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            for (var i=0; i<4; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 5 + 120*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '310px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            var img = new Image();
            img.src = "obs.gif";
            img.style.height = '50px';
            img.style.width = '50px';
            img.style.position = 'absolute';
            img.style.top = '185px';
            img.style.zIndex = 6;
            img.style.left = '370px';
            array_obstaculos.push(img);
            escenario.appendChild(img);

            break;

        case 5:
            // NIVEL 5 --> ALEATORIO
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[9];

            var random_pos = Math.floor(Math.random() * 3);

            for (var i=0; i<5; i++) {
                var img = new Image();
                img.src = "pinchos.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 65 + 60*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '190px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<4; i++) {
                var img = new Image();
                img.src = "pinchos.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 5 + 120*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '370px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            // El último obstáculo con pinchos del nivel es aleatorio
            for (var j=0; j<3; j++) {
                if (j == random_pos) {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 65 + 120*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '430px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    break;
                }
            }

            break;

        case 6:
            // NIVEL 6
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[10];

            for (var i=0; i<7; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '65px';
                img.style.zIndex = 6;
                img.style.left = 70 + 60*i + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<7; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '305px';
                img.style.zIndex = 6;
                img.style.left = 70 + 60*i + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<3; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 125 + 60*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '430px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<3; i++) {
                if (i != 1) {
                    var img = new Image();
                    img.src = "obs.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 125 + 60*i + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '70px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                }
            }
            break; 

        case 7:
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[11];
         /*introducir bucles
            repite(nveces):
              instruccion()
              instruccion()
            lo que sea (importante los espacios, para mostrar la identación de Python)
        */

            for (var i=0; i<2; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 125 + 120*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '70px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<2; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 5 + 360*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '10px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<2; i++) {
                var img = new Image();
                img.src = "obs.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 5 + 360*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '490px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<4; i++) {
                var img = new Image();
                img.src = "pinchos.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 5 + 120*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '310px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            var img = new Image();
            img.src = "pinchos.gif";
            img.style.height = '50px';
            img.style.width = '50px';
            img.style.position = 'absolute';
            img.style.top = '185px';
            img.style.zIndex = 6;
            img.style.left = '250px';
            array_obstaculos.push(img);
            escenario.appendChild(img);

            break;

        case 8:
            // NIVEL 8 -> ALEATORIO COMPLETAMENTE  
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[12];
            var x = Math.floor((Math.random() * 7) + 1);
            var y = Math.floor((Math.random() * 7) + 1);
            var z = Math.floor((Math.random() * 7) + 1);
            var i = 0;
            var j = 0;

            while (i<6){
                // el valor de x decide aleatoriamente donde habrá un hueco
                if (x == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "obs.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '130px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }
            i = 0;
            j = 0;
            while (i<6){
                // el valor de y decide aleatoriamente donde habrá un hueco
                if (y == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '250px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }
            i = 0;
            j = 0;
            while (i<6){
                // el valor de z decide aleatoriamente donde habrá un hueco
                if (z == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "obs.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '430px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            break;

        case 9:
            // NIVEL 9 -> INTRODUCIR CONDICIONALES
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[13];
            var x = Math.floor((Math.random() * 7) + 1);
            var y = Math.floor((Math.random() * 7) + 1);
            var z = Math.floor((Math.random() * 7) + 1);
            while (z == y) {
                z = Math.floor((Math.random() * 7) + 1);
            }
            var i = 0;
            var j = 0;

            for(var b=0; b<2; b++) {
                var img = new Image();
                img.src = "pinchos.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 5 + 360*b + 'px';
                img.style.zIndex = 6;
                img.style.left = '10px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            while (i<6){
                // el valor de x decide aleatoriamente donde habrá un hueco
                if (x == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "obs.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '130px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            i = 0;
            j = 0;
            while (i<5){
                if (y == j || z == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '250px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            var img = new Image();
            img.src = "pinchos.gif";
            img.style.height = '50px';
            img.style.width = '50px';
            img.style.position = 'absolute';
            img.style.top = '185px';
            img.style.zIndex = 6;
            img.style.left = '430px';
            array_obstaculos.push(img);
            escenario.appendChild(img);

            break;

        case 10:
            // NIVEL 10 -> nivel dificil
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            // w,x -> primera fila de obstáculos
            var w = Math.floor((Math.random() * 7) + 1);
            var x = Math.floor((Math.random() * 7) + 1);

            // y -> segunda fila
            var y = Math.floor((Math.random() * 7) + 1);
            // z -> tercera fila
            var z = Math.floor((Math.random() * 7) + 1);

            var i = 0;
            var j = 0;
            texto_py.value = array_idioma[14];

            while (i<5){
                // los valores de 'w' y 'x' deciden aleatoriamente donde habrá un hueco
                if (w == j || x == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '130px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            i = 0;
            j = 0;
            while (i<6){
                // el valor de y decide aleatoriamente donde habrá un hueco
                if (y == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '250px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            i = 0;
            j = 0;
            while (i<6) {
                // el valor de z decide aleatoriamente donde habrá un hueco
                if (z == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '370px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            i = 0;
            j = 0;
            while (i<6) {
                // el valor de u decide aleatoriamente donde habrá un hueco
                if (3 == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '490px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            break;

        case 11:
            /* NIVEL 11 -> Implementar testing */
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[15];

            for(var b=0; b<9; b++) {
                if (b != 3) {
                    if (b != 7) {
                        var img = new Image();
                        img.src = "obs.gif";
                        img.style.height = '50px';
                        img.style.width = '50px';
                        img.style.position = 'absolute';
                        img.style.top = '5px';
                        img.style.zIndex = 6;
                        img.style.left = 10 + 60*b + 'px';
                        array_obstaculos.push(img);
                        escenario.appendChild(img);
                    }
                }
            }

            for(var b=0; b<9; b++) {
                if (b != 3) {
                    if (b != 7) {
                        var img = new Image();
                        img.src = "obs.gif";
                        img.style.height = '50px';
                        img.style.width = '50px';
                        img.style.position = 'absolute';
                        img.style.top = '365px';
                        img.style.zIndex = 6;
                        img.style.left = 10 + 60*b + 'px';
                        array_obstaculos.push(img);
                        escenario.appendChild(img);
                    }
                }
            }

            for (var i=0; i<4; i++) {
                var img = new Image();
                img.src = "pinchos.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 65 + 60*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '190px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for (var i=0; i<4; i++) {
                var img = new Image();
                img.src = "pinchos.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = 125 + 60*i + 'px';
                img.style.zIndex = 6;
                img.style.left = '430px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }


            break;

        case 12:
            // NIVEL 12 -> Unit Test + nivel difícil
            continuar = limpiar_nivel();
            while (!continuar) {
                continuar = limpiar_nivel();
            }

            texto_py.value = array_idioma[16];
            var i = 0;
            var j = 0;
            // w -> primera fila
            var w = Math.floor((Math.random() * 5) + 1);
            // x -> segunda fila
            var x = Math.floor((Math.random() * 5) + 1);
            // y -> tercera fila
            var y = Math.floor((Math.random() * 5) + 1);
            // z -> cuarta fila
            var z = Math.floor((Math.random() * 5) + 1);

            for(var b=0; b<9; b++) {
                var img = new Image();
                img.src = "pinchos.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '5px';
                img.style.zIndex = 6;
                img.style.left = 10 + 60*b + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            for(var b=0; b<9; b++) {
                var img = new Image();
                img.src = "pinchos.gif";
                img.style.height = '50px';
                img.style.width = '50px';
                img.style.position = 'absolute';
                img.style.top = '365px';
                img.style.zIndex = 6;
                img.style.left = 10 + 60*b + 'px';
                array_obstaculos.push(img);
                escenario.appendChild(img);
            }

            while (i<5) {
                // el valor de u decide aleatoriamente donde habrá un hueco
                if (w == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '70px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            i = 0;
            j = 0;
            while (i<5) {
                // el valor de x decide aleatoriamente donde habrá un hueco
                if (x == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '190px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            i = 0;
            j = 0;
            while (i<5) {
                // el valor de y decide aleatoriamente donde habrá un hueco
                if (y == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '310px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }

            i = 0;
            j = 0;
            while (i<6) {
                // el valor de z decide aleatoriamente donde habrá un hueco
                if (z == j) {
                    j++;
                } else {
                    var img = new Image();
                    img.src = "pinchos.gif";
                    img.style.height = '50px';
                    img.style.width = '50px';
                    img.style.position = 'absolute';
                    img.style.top = 5 + 60*j + 'px';
                    img.style.zIndex = 6;
                    img.style.left = '430px';
                    array_obstaculos.push(img);
                    escenario.appendChild(img);
                    i++;
                    j++;
                }
            }
            break;
    }
}

function cambio_nivel(mas_menos) {

    switch(mas_menos) {
        case 0:
            //cargar nivel anterior
            if (nivel_actual <= 1){
                mostrarError(array_idioma[31]);
            } else {
                nivel_actual--;
                cargar_nivel(nivel_actual, false);
            }
            break;
        case 1:
            //cargar nivel siguiente
            if (nivel_actual >= num_niveles){
                mostrarError(array_idioma[32]);
            } else {
                nivel_actual++;
                cargar_nivel(nivel_actual, false);
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
    casos_prueba = [];
    // Cuando se vuelva a traducir, el robot debe volver a la posición inicial para reiniciar el nivel.
    img_player.style.left = "10px";
    img_player.style.top = "180px";
    img_player.src = "robot_lateral.gif";

    parsearCodigo(texto).then(array => {
        if (array == null) {
            /* do nothing */
        } else {
            comprobarArray(array).then(correcto => {
                if (correcto) {
                    texto_salida.value = array_idioma[17];
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
            texto_salida.value = array_idioma[18];
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
                if (array_oraculos[i] == array_idioma[86]) {
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
    var img_player = document.getElementById('robot');
    var img_src = img_player.getAttribute("src");
    if (instrucciones.length == 0) {
        printearTestCases().then(() => {
            return true;
        })
    }

    var inst = instrucciones.pop();

    if (inst.charAt(0) == 'r') {   // Viene un condicional, se trata de manera diferente (formato -> condición, instrucciones[])
            var array_temporal = inst.split(',');
            var orientacion_robot = array_temporal[0];
            if (img_src == orientacion_robot) {
                for (var i = 1; i < array_temporal.length; i++) {
                    await eval(array_temporal[i]).then(continuar => {
                        if (continuar == true) {
                            /* seguir con el bucle */
                        } else if (continuar == 2) { // nivel superado
                            printearTestCases().then(() => {
                                return true;
                            })
                        } else { // colisión con pinchos o caer al vacío
                            printearTestCases().then(() => {
                                return true;
                            })
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
            if (continuar == true) {
                crearSecuencia(instrucciones);
            } else if (continuar == 2) {  // nivel superado
                printearTestCases().then(() => {
                    return true;
                })
            } else {  // colisión con pinchos o caer al vacío
                printearTestCases().then(() => {
                    return true;
                })
            }
        })
    }
}

/* Función que se ejecuta al pulsar el botón Ejecutar Código. Compara las instrucciones que ha introducido el usuario con las soluciones más eficientes, y llama
a la función crearSecuencia(), que recorre el array de instrucciones.
*/
function ejecutarCodigo() {
    var btn = document.getElementById("ejecutarprog");
    var texto_salida = document.getElementById('output');
    if (idioma == "español") {
        switch (nivel_actual) {
            // comprobar si los niveles NO aleatorios (1,2,3,6,7 y 11) han sido superados de la manera más eficiente.
            case 1:
                if (array_traducido.length == array_sol_n1.length && array_traducido.every((v,i) => v === array_sol_n1[i])) {
                        eficiente = 2;
                } else eficiente = 1;
                break;
            case 2:
                if ((array_traducido.length == array_sol_n2yn3_1.length || array_traducido.length == array_sol_n2yn3_2.length) && 
                   (array_traducido.every((v,i) => v === array_sol_n2yn3_1[i]) || array_traducido.every((v,i) => v === array_sol_n2yn3_2[i]))) {
                    eficiente = 2;
                } else eficiente = 1;
                break;
            case 3:
                if ((array_traducido.length == array_sol_n2yn3_1.length || array_traducido.length == array_sol_n2yn3_2.length) && 
                   (array_traducido.every((v,i) => v === array_sol_n2yn3_1[i]) || array_traducido.every((v,i) => v === array_sol_n2yn3_2[i]))) {
                    eficiente = 2;
                } else eficiente = 1;
                break;
            case 6:
                if ((array_traducido.length == array_sol_n6_1.length || array_traducido.length == array_sol_n6_2.length) && 
                (array_traducido.every((v,i) => v === array_sol_n6_1[i]) || array_traducido.every((v,i) => v === array_sol_n6_2[i]))) {
                    eficiente = 2;
                } else eficiente = 1;
                break;
            case 7:
                if ((array_traducido.length == array_sol_n7_1.length || array_traducido.length == array_sol_n7_2.length) && 
                (array_traducido.every((v,i) => v === array_sol_n7_1[i]) || array_traducido.every((v,i) => v === array_sol_n7_2[i]))) {
                    eficiente = 2;
                } else eficiente = 1;
                break;
            case 11:
                if (array_traducido.length == array_sol_n11.length && array_traducido.every((v,i) => v === array_sol_n11[i])) {
                    eficiente = 2;
                } else eficiente = 1;
                break;    
 
            default:
                /* do nothing */
                break; 
        }
    } else if (idioma == "ingles") {
        switch (nivel_actual) {
            case 1:
                if (array_traducido.length == array_sol_n1_eng.length && array_traducido.every((v,i) => v === array_sol_n1_eng[i])) {
                        eficiente = 2;
                } else eficiente = 1;
                break;
            case 2:
                if ((array_traducido.length == array_sol_n2yn3_1_eng.length || array_traducido.length == array_sol_n2yn3_2_eng.length) && 
                   (array_traducido.every((v,i) => v === array_sol_n2yn3_1_eng[i]) || array_traducido.every((v,i) => v === array_sol_n2yn3_2_eng[i]))) {
                    eficiente = 2;
                } else eficiente = 1;
                break;
            case 3:
                if ((array_traducido.length == array_sol_n2yn3_1_eng.length || array_traducido.length == array_sol_n2yn3_2_eng.length) && 
                   (array_traducido.every((v,i) => v === array_sol_n2yn3_1_eng[i]) || array_traducido.every((v,i) => v === array_sol_n2yn3_2_eng[i]))) {
                    eficiente = 2;
                } else eficiente = 1;
                break;
            case 6:
                if ((array_traducido.length == array_sol_n6_1_eng.length || array_traducido.length == array_sol_n6_2_eng.length) && 
                (array_traducido.every((v,i) => v === array_sol_n6_1_eng[i]) || array_traducido.every((v,i) => v === array_sol_n6_2_eng[i]))) {
                    eficiente = 2;
                } else eficiente = 1;
                break;
            case 7:
                if ((array_traducido.length == array_sol_n7_1_eng.length || array_traducido.length == array_sol_n7_2_eng.length) && 
                (array_traducido.every((v,i) => v === array_sol_n7_1_eng[i]) || array_traducido.every((v,i) => v === array_sol_n7_2_eng[i]))) {
                    eficiente = 2;
                } else eficiente = 1;
                break;
            case 11:
                if (array_traducido.length == array_sol_n11_eng.length && array_traducido.every((v,i) => v === array_sol_n11_eng[i])) {
                    eficiente = 2;
                } else eficiente = 1;
                break;

            default:
                break; 
        }
    } else {
        /* Añadir arrays con comprobaciones de nivel en otros idiomas. De momento solo soporta español e inglés */
    }

    array_traducido.reverse();
    var terminado = crearSecuencia(array_traducido);
    btn.disabled = true;
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

        if (img_src == "robot_lateral.gif" || img_src == "robot_lateral_atras.gif"){
            id = setInterval(framehorizontal, 275);
        }

        if (img_src == "robot_frente.gif" || img_src == "robot_espalda.gif") {
            id = setInterval(framevertical, 275);
        }
    
        function framehorizontal(){
            if ( x < maxPos_left && i < npasos) {
                if (img_src == "robot_lateral.gif") {
                    x = x + 60;
                }
                if (img_src == "robot_lateral_atras.gif" && x > minPos_left) {
                    x = x - 60;
                } 
                hayColision(x,1).then(colision => {
                    switch (colision) {
                        case 0:  // no hay colisión 
                            img_player.style.left = x + "px";
                            i+=1;
                            break;   
                        case 1:  // colisión obstáculo simple
                            if (array_oraculos.includes(array_idioma[83])) {
                                var indice = array_oraculos.indexOf(array_idioma[83]);
                                texto_salida.value += '\n' + casos_prueba[indice] + ' TRUE';
                                array_oraculos.splice(indice, 1);
                                casos_prueba.splice(indice, 1);
                            }
                            resolve(true);
                            clearInterval(id);
                            break;
                        case 2:  // colisión obstáculo pinchos
                            texto_salida.value += '\n' + array_idioma[19];
                            if (array_oraculos.includes(array_idioma[84])) {
                                var indice = array_oraculos.indexOf(array_idioma[84]);
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
                    texto_salida.value += '\n' + array_idioma[20];
                    img_player.src = "suelo_negro.png";
                    if (array_oraculos.includes(array_idioma[86])) {
                        var indice = array_oraculos.indexOf(array_idioma[86]);
                        texto_salida.value += '\n' + casos_prueba[indice] + ' FALSE';
                        array_oraculos.splice(indice, 1);
                        casos_prueba.splice(indice, 1);
                    }
                    resolve(false);
                    clearInterval(id);
                } else {  // NIVEL COMPLETADO
                    if (eficiente == 0) {  // nivel aleatorio, no se puede comprobar la eficiencia
                        texto_salida.value = array_idioma[21];
                    } else if (eficiente == 2) {  // solución eficiente
                        texto_salida.value = array_idioma[79];
                    } else texto_salida.value = array_idioma[78];  // solución ineficiente
                    resolve(2);
                }
            }
        }

        function framevertical() {
            if (j < npasos) {
                if (img_src == "robot_espalda.gif" && y > maxPos_top) {
                    y = y - 60;
                }
                if (img_src == "robot_frente.gif" && y < minPos_top) {
                    y = y + 60;
                }
                hayColision(y,2).then(colision => {
                    switch (colision) {
                        case 0:  // no hay colisión 
                            img_player.style.top = y + "px";
                            j+=1;
                            break;
                        case 1:  // colisión con obstáculo simple
                            if (array_oraculos.includes(array_idioma[83])) {  // si hay un caso de prueba no_avanza, mostrar TRUE.
                                var indice = array_oraculos.indexOf(array_idioma[83]);
                                texto_salida.value += '\n' + casos_prueba[indice] + ' TRUE';
                                array_oraculos.splice(indice, 1);
                                casos_prueba.splice(indice, 1);
                            }
                            resolve(true);
                            clearInterval(id);
                            break;
                        case 2:  // colisión obstáculo pinchos
                            texto_salida.value += '\n' + array_idioma[19];
                            if (array_oraculos.includes(array_idioma[84])) {
                                var indice = array_oraculos.indexOf(array_idioma[84]);
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
                        if (array_oraculos.includes(array_idioma[85])) {
                            var indice = array_oraculos.indexOf(array_idioma[85]);
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
                    case "robot_lateral.gif":
                        var giro_espalda = 1;
                        var giro_izq = 2;
                        var giro_frente = 3;
                        var giro_der = 4;
                        break;
                    case "robot_frente.gif":
                        var giro_der = 1;
                        var giro_espalda = 2;
                        var giro_izq = 3;
                        var giro_frente = 4;
                        break;
                    case "robot_lateral_atras.gif":
                        var giro_frente = 1;
                        var giro_der = 2;
                        var giro_espalda = 3;
                        var giro_izq = 4;
                        break;
                    case "robot_espalda.gif":
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
                    case "robot_lateral.gif":
                        var giro_frente = 1;
                        var giro_izq = 2;
                        var giro_espalda = 3;
                        var giro_der = 4;
                        break;
                    case "robot_frente.gif":
                        var giro_izq = 1;
                        var giro_espalda = 2;
                        var giro_der = 3;
                        var giro_frente = 4;
                        break;
                    case "robot_lateral_atras.gif":
                        var giro_espalda = 1;
                        var giro_der = 2;
                        var giro_frente = 3;
                        var giro_izq = 4;
                        break;
                    case "robot_espalda.gif":
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
                        img_player.src = "robot_espalda.gif";
                        break;
                    case giro_izq:
                        img_player.src = "robot_lateral_atras.gif";
                        break;
                    case giro_frente:
                        img_player.src = "robot_frente.gif";
                        break;
                    case giro_der:
                        img_player.src = "robot_lateral.gif";
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
        var inst_norte = "robot_lateral.gif";
        var inst_sur = "robot_lateral_atras.gif";
        var inst_este = "robot_frente.gif";
        var inst_oeste = "robot_espalda.gif";

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
                case array_idioma[49]:
                    // concidicón robot_norte
                    inst_norte += ',' + inst;
                    break;

                case array_idioma[50]:
                    // concidicón robot_sur
                    inst_sur += ',' + inst;
                    break;

                case array_idioma[51]:
                    // concidicón robot_este
                    inst_este += ',' + inst;
                    break;

                case array_idioma[52]:
                    // concidicón robot_oeste
                    inst_oeste += ',' + inst;
                    break;
            }
        }

        // Verificar que instrucción hay que añadir al array, dependiendo de la condición del si()
        if (inst_norte != "robot_lateral.gif") {
            array_traducido.push(inst_norte);
        } else if (inst_sur != "robot_lateral_atras.gif") {
            array_traducido.push(inst_sur);
        } else if (inst_este != "robot_frente.gif") {
            array_traducido.push(inst_este);
        } else if (inst_oeste != "robot_espalda.gif") {
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
                texto_salida.value = array_idioma[80];
            }
            resolve(false);
        }

        if (casos_prueba.includes(array[0])) {  // El identificador de los testcases tiene que ser diferente.
            texto_salida.value = array_idioma[81] + array[0].slice(0,-1) + array_idioma[82];
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

        const start = async () => {
            await asyncForEach(array, async (instruccion) => {
                await new function() {
                    // si la instruccion no hace Match con ninguna de estas expresiones, ERROR DE COMPILACIÓN.
                    var concuerda_avanza = matchExact(array_idioma[33], instruccion);
                    var concuerda_gira1 = matchExact(array_idioma[34], instruccion);
                    var concuerda_gira2 = matchExact(array_idioma[35], instruccion);
                    var concuerda_repite = matchExact(array_idioma[36], instruccion);
                    var concuerda_si_sur = matchExact(array_idioma[37], instruccion);
                    var concuerda_si_norte = matchExact(array_idioma[38], instruccion);
                    var concuerda_si_este = matchExact(array_idioma[39], instruccion);
                    var concuerda_si_oeste = matchExact(array_idioma[40], instruccion);
                    var concuerda_repite_ident = matchExact(array_idioma[41], instruccion);
                    var concuerda_avanza_ident = matchExact(array_idioma[42], instruccion);
                    var concuerda_gira1_ident = matchExact(array_idioma[43], instruccion);
                    var concuerda_gira2_ident = matchExact(array_idioma[44], instruccion);
                    var concuerda_si_sur_ident = matchExact(array_idioma[45], instruccion);
                    var concuerda_si_norte_ident = matchExact(array_idioma[46], instruccion);
                    var concuerda_si_este_ident = matchExact(array_idioma[47], instruccion);
                    var concuerda_si_oeste_ident = matchExact(array_idioma[48], instruccion);
                    var concuerda_testcase = matchExact(array_idioma[73], instruccion);
                    var concuerda_testcase_ident = matchExact(array_idioma[98], instruccion);
                    var concuerda_assert_noav = matchExact(array_idioma[74], instruccion);
                    var concuerda_assert_nopi = matchExact(array_idioma[75], instruccion);
                    var concuerda_assert_choca = matchExact(array_idioma[76], instruccion);
                    var concuerda_assert_nocae = matchExact(array_idioma[77], instruccion);

                    if (es_bucle) {
                        // instrucciones dentro de la estructura iterativa repite():
                        if (concuerda_avanza_ident || concuerda_gira1_ident || concuerda_gira2_ident) {
                        instruccion = instruccion.substring(2); // hay que filtrar los espacios (2 espacios antes de la instrucción)
                        array_bucle.push(instruccion);
                        } else if (concuerda_repite_ident)  { // no soporta bucles dentro de otro bucle
                            texto_salida.value = array_idioma[22];
                            resolve(false);
                        } else if (concuerda_si_norte_ident|| concuerda_si_este_ident || concuerda_si_sur_ident || concuerda_si_oeste_ident) {  // no soporta combinación de estructuras
                            texto_salida.value = array_idioma[30];
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
                            texto_salida.value = array_idioma[28];
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
                            texto_salida.value = array_idioma[29];
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
                            texto_salida.value = array_idioma[87];
                            resolve(false);
                        } else if (concuerda_repite || concuerda_repite_ident) {  // bucles no soportados en testcases. ERROR
                            texto_salida.value = array_idioma[88];
                            resolve(false);
                        } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste || concuerda_si_norte_ident|| concuerda_si_este_ident || concuerda_si_sur_ident || concuerda_si_oeste_ident) {  // condicionales no soportados
                            texto_salida.value = array_idioma[89];
                            resolve(false);
                        } else if (concuerda_testcase || concuerda_testcase_ident) {  // testcase sin cerrar el actual. ERROR.
                            texto_salida.value = array_idioma[90];
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

    var error_parentesis1_av = instruccion_actual.match(array_idioma[53]);
    var error_parentesis2_av = instruccion_actual.match(array_idioma[54]);
    var error_parentesis1_gi = instruccion_actual.match(array_idioma[55]);
    var error_parentesis2_gi = instruccion_actual.match(array_idioma[56]);
    var error_parentesis3_gi = instruccion_actual.match(array_idioma[57]);
    var error_parentesis4_gi = instruccion_actual.match(array_idioma[58]);
    var error_parametro_av = instruccion_actual.match(array_idioma[59]);
    var error_parametro_gira = instruccion_actual.match(array_idioma[60]);
    var error_parametro_repite = instruccion_actual.match(array_idioma[61]);
    var error_parametro_si = instruccion_actual.match(array_idioma[62]);
    var error_parametro_general = instruccion_actual.match(array_idioma[70]);
    var error_instruccion_nostruct_pos = instruccion_actual.match(array_idioma[63]);
    var error_instruccion_nostruct_neg = instruccion_actual.match(array_idioma[69]);
    var error_instruccion_nostruct_str = instruccion_actual.match(array_idioma[100]);
    var error_instruccion_struct_num = instruccion_actual.match(array_idioma[64]);
    var error_instruccion_struct_str = instruccion_actual.match(array_idioma[65]);
    var error_repite_puntos = matchExact(array_idioma[66], instruccion_actual);
    var error_si_puntos = matchExact(array_idioma[67], instruccion_actual);
    var error_condicion = matchExact(array_idioma[68], instruccion_actual);
    var error_assert_noident_1 = instruccion_actual.match(array_idioma[91]);
    var error_assert_noident_2 = instruccion_actual.match(array_idioma[92]);
    var error_assert_noident_3 = instruccion_actual.match(array_idioma[93]);
    var error_assert_noident_4 = instruccion_actual.match(array_idioma[94]);
    var error_oraculo = instruccion_actual.match(array_idioma[96]);
    var error_tc_puntos = matchExact(array_idioma[99], instruccion_actual);
    var texto_salida = document.getElementById('output');

    if (error_inst) {
        return true;
    }

    if (error_parentesis1_av != null || error_parentesis2_av != null || error_parentesis1_gi != null || error_parentesis2_gi != null || error_parentesis3_gi != null || error_parentesis4_gi != null) { // error paréntesis
        texto_salida.value = array_idioma[25];
        error_inst = true;
    } else if (error_parametro_av != null || error_parametro_gira != null || error_parametro_repite != null || error_parametro_si != null) { // parámetro no encontrado
        texto_salida.value = array_idioma[26];
        error_inst = true;
    } else if (error_instruccion_nostruct_pos != null || error_instruccion_nostruct_neg != null || error_parametro_general != null || error_instruccion_nostruct_str != null || error_tc_puntos) { // instruccion no existente
        if (error_repite_puntos || error_si_puntos || error_tc_puntos) {  // caracter : no usado en estructuras repite, condicional y testcase
            texto_salida.value = array_idioma[27];
        } else {
            texto_salida.value = array_idioma[23] + "" + instruccion_actual + array_idioma[24];
        }
        error_inst = true;
    } else if (error_condicion) {  // no existe la condición
        texto_salida.value = array_idioma[71];
        error_inst = true;
    } else if (error_instruccion_struct_num != null || error_instruccion_struct_str != null) {  // estructura errónea
        texto_salida.value = array_idioma[72];
        error_inst = true;
    } else if (error_assert_noident_1 != null || error_assert_noident_2 != null || error_assert_noident_3 != null || error_assert_noident_4 != null)  {  // assert no identada
        texto_salida.value = array_idioma[95];
        error_inst = true;
    } else if (error_oraculo != null) { // oráculo en el assert no válido
        texto_salida.value = array_idioma[97];
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

        switch (direccion) {
            case 1:
                // comprobar colision horizontal
                array_obstaculos.forEach(obstaculo => {
                    var obs_src = obstaculo.getAttribute("src");
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
function limpiar_nivel() {
        var id = null;
        var escenario = document.getElementById('escenario');
        var texto_salida = document.getElementById('output');
        var img_player = document.getElementById('robot');
        var btn = document.getElementById('ejecutarprog');
        btn.disabled = true;
        casos_prueba = [];
        array_oraculos = [];
        img_player.style.left = "10px";
        img_player.style.top = "180px";
        img_player.src = "robot_lateral.gif";
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