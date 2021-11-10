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
// REVISAR ERRORES -> A VECES NO SE MUESTRA EL ERROR QUE TOCA.  -> EN CASO DE FALTAR :, NO MUESTRA EL ERROR QUE TOCA.
var array_obstaculos = new Array;
var array_instrucciones = new Array;
var array_traducido = new Array;
var array_bucle = new Array;
var array_condicional = new Array;
var actual_output_value = "";
var array_idioma = new Array;
var array_tcases = new Array;
var error_inst = false;

var array_esp = ["Juego sencillo para introducir a la programación en Python",
"Traducir a robot", "Ejecutar programa", "Reducir Nivel", "Aumentar Nivel",
"''' NIVEL 1" + '\n' + 'Este juego tiene un objetivo: Conseguir que el personaje llegue al final del nivel.' + '\n' + '\n' + 
'Para conseguirlo, tenemos que ordenar al personaje que haga ciertos movimientos -> Estos movimientos son las instrucciones del programa, que deben ser escritas en este panel.'
+ ' Estas instrucciones deben estar escritas en lenguaje Python, y se traducirán a un lenguaje que el personaje entienda para cargarlas y que se ejecuten.'
+ '\n' + '\n' + 'En cada nivel se presentará un reto diferente para aprender las reglas del juego paso a paso. Veremos diferentes obstáculos que se tratan de manera diferente.'
+ '\n' + 'Este primer nivel es el más sencillo, prueba a ejecutar la instrucción...' + '\n' + "'''" + '\n' + '\n' + 'avanza(4)',
"''' NIVEL 2" + '\n' + 'Ya hemos visto el funcionamiento del juego y de la instrucción avanza(x), donde x es el número de casillas que avanza el robot.' + '\n' +
'Este segundo nivel ya es un poco más difícil. Ahora necesitamos algo más. Prueba a ejecutar la secuencia que se ve...' + '\n' + '\n' + 'PISTA: El robot gira hacia la izquierda con la instrucción gira(-x). ' +
'\n' + 'El robot gira hacia la derecha con la instrucción gira(x).' + '\n' + "'''" + '\n' + '\n' + 'avanza(5)' + '\n' + 'gira(-1)',
"''' NIVEL 3" + '\n' + 'Introducimos ahora un nuevo obstáculo con pinchos. Es más pequeño pero más peligroso!!. Ejecuta para ver qué pasa si chocas con él...'
+ '\n' + "'''" + '\n' + '\n' + 'avanza(6)',
"''' NIVEL 4" + '\n' + 'Este nivel es más complejo porque la primera fila de obstáculos es aleatoria, por lo que la solución del nivel es diferente cada vez.' + '\n' 
+ "'''" + '\n' + '\n' + 'gira(-1)' + '\n' + 'avanza(2)' + '\n' + 'gira(1)',
"''' NIVEL 5" + '\n' + 'El nivel 5 es una variante del nivel 4. Hay un obstáculo aleatorio que varía su posición. Ten cuidado con él y superarás el nivel!!' + '\n' + "'''" + '\n' +
'\n' + 'avanza(5)',
"''' NIVEL 6" + '\n' + 'Ten cuidado con este nivel, con solo un movimiento erróneo puedes acabar dentro de un callejón sin salida!!' + '\n' + "'''" + '\n' + '\n' + 'avanza(5)',
"''' NIVEL 7" + '\n' + 'En este nivel se introducen las repeticiones de movimientos (bucles). Para evitar escribir mucho texto, se pueden crear repeticiones.' + '\n' 
+ 'Prueba a ejectuar el código que te ofrecemos, y observa con detenimiento los espacios que se dejan antes de las instrucciones dentro de la repetición.' + '\n' + 
"Ojo: Si no dejas 2 espacios ESTRICTAMENTE, no se va a repetir lo que pongas debajo del repite(x):" + '\n' + "'''" + '\n' + '\n' + 'repite(4):' + '\n' 
+ "  avanza(2)" + '\n' + "  gira(1)",
"''' NIVEL 8" + '\n' + 'Este nivel es completamente aleatorio, y hay solo un espacio por el que se puede pasar, así que ve con mucho cuidado para superar este nivel.' +
'\n' + 'Es recomendable intentar superar este nivel más de una vez para probar las diferentes soluciones posibles.' + '\n' + "'''" + '\n' + '\n' + 'avanza(6)' + '\n' + 'gira(-1)',
"''' NIVEL 9" + '\n' + "El juego ya está complicándose bastante. Este nivel es aleatorio también, pero vamos a introducir una nueva estructura: CONDICIONALES." +
'\n' + 'Los condicionales se basan en la certeza de una condición para ejecutar ciertas instrucciones. En caso de no cumplirse la condición, no se van a ejecutar. '  + '\n' +
'PISTA: Las condiciones que el robot entiende dependen de su orientación en el tablero: robot_sur -> robot orientado hacia el sur del TABLERO; robot_este -> robot orientado hacia el este del TABLERO, robot_norte y robot_oeste.'  
+ '\n' + '\n' + 'IMPORTANTE: Mucha atención con los espacios, ya que sucede igual que en el caso del repite(x):' + '\n' + "'''" + '\n' + '\n' + 'si(robot_norte):' + '\n' + '  avanza(1)' + '\n' + '  gira(-1)' + '\n' + 
'si(robot_oeste):' + '\n' + '  gira(1)' + '\n' + '  avanza(2)' + '\n' + '  gira(-1)',
"''' NIVEL 10" + '\n' + 'Nos  acercamos al final del juego. Los niveles 11 y 12, como podrás ver, se han diseñado para enseñar el último concepto del juego.' + '\n' + 'El nivel 10 no aporta nada nuevo, pero es el nivel más difícil de superar!!' 
+ '\n' + 'Es un nivel completamente aleatorio, excepto la última fila de todas, que si hubiera sido también aleatoria podría cerrar el acceso a la platorma final y el nivel sería imposible de superar.' + '\n' + "'''" + '\n' + '\n' + 
'avanza(9)',
"''' NIVEL 11" + '\n' + 'En este nivel 11, casi terminando el juego, se introduce el concepto de testing de código. El testing es una herramienta muy usada para validar el código mediante casos de prueba sobre el estado del programa ' +
'tras una serie de eventos que modifican el estado.' + '\n' + '\n' + 'FUNCIONAMIENTO: La estructura a seguir la puedes ver abajo. Hay que dar un identificador a los casos de prueba para poder ver el resultado.' + '\n' +  
'Luego hay que introducir una serie de instrucciones que van a modificar el estado del programa. Por último, escribir el oráculo, que es el estado que queremos comprobar tras la ejecución de las instrucciones.' + '\n' +
'ORÁCULO: La instrucción afirma(estado) es la que fija el oráculo. Los estados posibles son no_avanza (verificar que el robot ha colisionado con un obstáculo liso), no_pincha (verificar que el robot no ha colisionado con un obstáculo de pinchos), ' +
'choca(verificar que el robot ha llegado a los límites del tablero) y no_cae(verificar que el robot no cae al vacío)' + '\n' + "'''" + '\n' + '\n' + 'testcase1:  #Esto es el identificador' + '\n' + '  avanza(4)  #Esta es la secuencia de instrucciones'
+ '\n' + '  afirma(no_pincha)  #Esto es el Oráculo',
"''' NIVEL 12" + '\n' + 'Con este nivel se termina el juego. Es el nivel más difícil de solucionar, por lo que superar este nivel es pasarse el juego.' + '\n' + 'Prueba a hacer algunos casos de prueba antes de solucionar el nivel!' + '\n' + "'''"
+ '\n' + '\n' + 'testcase1:' + '\n' + '  gira(-1)' + '\n' + '  avanza(3)' + '\n' + '  afirma(no_pincha)',
" ** Programa traducido correctamente **",
"Error, falta ''' para cerrar el comentario!!",
"CUIDADO!! El robot se ha chocado con los pinchos...",
"El robot ha caído al vacío :( , vuelve a intentarlo!!!",
"Enhorabuena, has superado el nivel!!",
"ERROR. No se puede hacer un repite() dentro de otro repite()",
"ERROR. La instruccion ",
" no existe...",
"ERROR con los paréntesis, la estructura es: instrucción(parámetro)." + "\n"
+ "Por ejemplo: avanza(5)",
"ERROR. No has puesto parámetro de entrada.",
"ERROR. La instrucción REPITE(x) tiene que acabar con el carácter ':'" + "\n" 
+ "Por ejemplo: repite(6):",
'ERROR. No se puede iniciar un bucle con repite(x) dentro de un condicional.',
'ERROR. No se puede iniciar un condicional dentro de otro condicional.' + '\n' + 'Para crear más condiciones, hazlo en otra línea.',
"ERROR. No se pueden crear condiciones dentro de un repite(x).",
'No se puede decrementar más el nivel!!',
'No se puede aumentar más el nivel!!',
//POSICIÓN 33 ES LA PRIMERA REGEX
/avanza\(\d+\)/, /gira\(\d+\)/, /gira\(-\d+\)/, /repite\(\d+\):/, /si\(robot_sur\):/, /si\(robot_norte\):/, /si\(robot_este\):/, /si\(robot_oeste\):/,
/  repite\(\d+\):/, /  avanza\(\d+\)/, /  gira\(\d+\)/, /  gira\(-\d+\)/, /  si\(robot_sur\):/, /  si\(robot_norte\):/, /  si\(robot_este\):/, /  si\(robot_oeste\):/,
"robot_norte", "robot_sur", "robot_este", "robot_oeste",
//POSICIÓN 53 REGEX ERRORES
/avanza\d+\)/g, /avanza\(\d+/g, /gira\d+\)/g, /gira\(d+/g, /gira-\d+\)/g, /gira\(-\d+/g, /avanza\(\)/, /gira\(\)/, /repite\(\):/, /si\(\):/, /\w+\(\d+\)/, /\w+\(\d+\):/, /\w+\(\w+\):/,
/repite\(\d+\)/, /si\(\w+\)/, /si\(\w+\):/, /\w+\(-\d+\)/, /\w+\(\)/,
//POSICIÓN 71
"Condición NO existente..." + '\n' + "Condiciones: robot_norte, robot_sur, robot_este, robot_oeste", "ERROR. Estructura errónea.",
//POSICIÓN 73
/testcase\d+\:/, /  afirma\(no_avanza\)/, /  afirma\(no_pincha\)/, /  afirma\(choca\)/, /  afirma\(no_cae\)/
];

var array_eng = ["Easy game to introduce programming in Python",
"Translate to robot", "Execute program", "Reduce Level", "Increase Level",
"''' LEVEL 1" + '\n' + 'This game has only one objective: Help robot to reach the end of the level' + '\n' + '\n' + 
'To do it, we must order the robot to make some movements -> This movements are the program instructions, that should be written in this panel'
+ ' This instructions must be written using Python language, and they will be translated to a languaje "spoken" by the robot so they can be executed.'
+ '\n' + '\n' + 'In each level, we will face a different challenge to learn game rules step by step. We will face different types of obstacles, each one working in a different way'
+ '\n' + 'This first level is the easiest one, try to execute the instruction...' + '\n' + "'''" + '\n' + '\n' + 'forward(4)',
"''' LEVEL 2" + '\n' + 'We have already seen how the game and the instruction avanza(x) work, where x is the number of steps the robot moves on x axis.' + '\n' +
'This second level is a bit more difficult. Now we need something else.  Try to execute the instructions sequence...' + '\n' + '\n' + 'CLUE: Robot turns left with instruction gira(-x). ' 
+ '\n' + 'Robot turns right with instruction gira(x).' +'\n' + "'''" + '\n' + '\n' + 'forward(5)' + '\n' + 'turn(-1)',
"''' LEVEL 3" + '\n' + 'Now we introduce a new spiked obstacle . It is smaller but more dangerous!!. Execute the given sequence to see what happens when you collide with it...  '
+ '\n' + "'''" + '\n' + '\n' + 'forward(6)',
"''' LEVEL 4" + '\n' + 'This level is even more difficult because the first obstacles row is random, so the solution for this level is different each time you play this level.' + '\n' 
+ "'''" + '\n' + '\n' + 'turn(-1)' + '\n' + 'forward(2)' + '\n' + 'turn(1)',
"''' LEVEL 5" + '\n' + 'Level 5 is a modification of level 4. There is one random obstacle that changes its position. Stay alert and you will success!!' + '\n' + "'''" + '\n' +
'\n' + 'forward(5)',
"''' LEVEL 6" + '\n' + "Care with this level, only executing one wrong movement you may find yourself in a dead end!!" + '\n' + "'''" + '\n' + '\n' + 'forward(5)',
"''' LEVEL 7" + '\n' + 'In this level we are introducing the movements repetitions (loops). To avoid writting too much text, repetitions are used.' + '\n' 
+ 'Try to execute the given code, and take a look on the spaces before the instructions that are inside repeat(x) structure.' + '\n' + 
"IMPORTANT: If you forget leaving STRICTLY 2 spaces for instructions inside repeat(x):, they will not be repeated." + '\n' + "'''" + '\n' + '\n' + 'repeat(4):' + '\n' 
+ "  forward(2)" + '\n' + "  turn(1)",
"''' LEVEL 8" + '\n' + 'This level is all random, and there is only one gap where the robot can go forward, so think and be careful to success on level 8.' +
'\n' + 'It is good to try to complete this level more than once to try some possible different solutions.' + '\n' + "'''" + '\n' + '\n' + 'forward(6)' + '\n' + 'turn(-1)',
"''' LEVEL 9" + '\n' + "Game is already getting difficult. This level is random, but we are introducing a new structure: CONDITIONALS." +
'\n' + 'Conditionals are based on the certainty of a condition to execute some instructions . If condition is not accomplished, instructions are not executed. '  + '\n' +
"CLUE: The conditions understood by the robot are depending on its orientation on the game: south_robot -> robot is south facing (SCENARIO is the reference) ; east_robot -> robot is east facing (SCENARIO is the reference)," +
" north_robot and south_robot."  + '\n' + '\n' + 'IMPORTANT: Take care about the spaces, conditionals work as repeat(x) structure.' + '\n' + "'''" + '\n' + '\n' + 'if(north_robot):' + '\n' + '  forward(1)' + '\n' + '  turn(-1)' + '\n' + 
'if(west_robot):' + '\n' + '  turn(1)' + '\n' + '  forward(2)' + '\n' + '  turn(-1)',
"''' LEVEL 10" + '\n' + 'We are almost on the end of the game. As you will see, level 11 and 12 are designed to show the last programming concept.' + '\n' + 'Level 10 has nothing new, but facing this level will be really difficult!!' 
+ '\n' + 'This level is full random excepting the last obstacles row, that cant be random because it might create an impossible level.' + '\n' + "'''" + '\n' + '\n' + 'forward(9)',
"''' LEVEL 11" + '\n' + 'In this level 11, almost ending the game, code testing is introduced. Testing is a very useful way to validate code by creating test cases ' +
', taking in acount some events that modify the program state.' + '\n' + '\n' + 'HOW IT WORKS: The structure is shown below outside the comment. First, we must give a different identifier to each test case, so we can check later the result.' + '\n' +  
'Then we must write the instructions that will modify the program state. Last, we need the oracle, that is the state that we want to check after executing those instructions.' + '\n' +
'ORACLE: Oracle is defined by instruction assure(state). The possible states are not_forwards (robot collided with a normal obstacle), not_pricks (robot collided with a spiked obstacle), ' +
'collides(robot has reached the outside limits from scenario) and not_falls(robot did not fall from scenario).' + '\n' + "'''"+ '\n' + '\n' + 'testcase1:  #This is the identifier' + '\n' + '  forward(4)  #This is the instructions sequence'
+ '\n' + '  assert(not_pricks)  #This is the Oracle',
"''' LEVEL 12"+ '\n' + 'This level ends the game. It is the most difficult level, so completing this game literally means completing the game.' + '\n' + 'Try to make some testcases before finding the solution!' + '\n' + "'''"
+ '\n' + '\n' + 'testcase1:' + '\n' + '  turn(-1)' + '\n' + '  forward(3)' + '\n' + '  assert(not_pricks)',
" ** Program correctly translated **",
"ERROR, missing ''' to close comment!!",
"CARE!! Robot collided with spiked obstacle...",
"Robot fall to the emptiness :( , try again!!!",
"Congratulations, you have completed the level!!",
"ERROR. You can't use instruction repeat() inside another repeat()",
"ERROR. Instruction ",
" not found...",
"ERROR in parenthesis, the correct way is: instruction(parameter)." + "\n"
+ "For example: forward(5)",
"ERROR. You haven't written any input parameter.",
"ERROR. Instruction REPITE(x) must end with character ':'" + "\n" 
+ "For example: repeat(6):",
"ERROR. Loops with repeat(x) can't be created inside conditional structures.",
"ERROR. Conditional structures can't be created inside other conditionals." + '\n' + 'To create other conditions, write them in new lines.',
"ERROR. Conditional structures can't be created inside repeat(x).",
"You can't reduce more the level!!!",
"You can't increase more the level!!",
// POSICIÓN 33 REGEX
/forward\(\d+\)/, /turn\(\d+\)/, /turn\(-\d+\)/, /repeat\(\d+\):/, /if\(south_robot\):/, /if\(north_robot\):/, /if\(east_robot\):/, /if\(west_robot\):/,
/  repeat\(\d+\):/, /  forward\(\d+\)/, /  turn\(\d+\)/, /  turn\(-\d+\)/, /  if\(south_robot\):/, /  if\(north_robot\):/, /  if\(east_robot\):/, /  if\(west_robot\):/,
"north_robot", "south_robot", "east_robot", "west_robot",
//POSICIÓN 53 REGEX ERRORES
/forward\d+\)/g, /forward\(\d+/g, /turn\d+\)/g, /turn\(d+/g, /turn-\d+\)/g, /turn\(-\d+/g, /forward\(\)/, /turn\(\)/, /repeat\(\):/, /if\(\):/, /\w+\(\d+\)/, /\w+\(\d+\):/, /\w+\(\w+\):/,
/repeat\(\d+\)/, /if\(\w+\)/, /if\(\w+\):/, /\w+\(-\d+\)/, /\w+\(\)/,
//POSICIÓN 71
"Condition NOT found..." + '\n' + "Available conditions: north_robot, south_robot, east_robot, west_robot", "ERROR. Wrong structure.",
/testcase\d+\:/, /  assert\(not_forwards\)/, /  assert\(not_pricks\)/, /  assert\(collides\)/, /  assert\(not_falls\)/
];



function cambiarIdioma(lang) {
    var h4 = document.getElementById("h4_inicio");
    var btn_trad = document.getElementById("traducirprog");
    var btn = document.getElementById('ejecutarprog');
    var btn_anivel = document.getElementById("anivel");
    var btn_rnivel = document.getElementById("rnivel"); 
    var texto_py = document.getElementById('tarea');

    if (lang == "esp") {
        array_idioma = array_esp;
    } else {
        array_idioma = array_eng;
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
            // nivel dificil
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
                // el valor de w decide aleatoriamente donde habrá un hueco
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
            /* UNIT TEST:
            testcase1:
              avanza(5)
              afirmar(no_avanza)
              */
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
            // Unit Test + nivel difícil
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

function traducirCodigo() {
    var texto_salida = document.getElementById("output");
    var btn = document.getElementById("ejecutarprog");
    var texto_python = document.getElementById("tarea");
    var img_player = document.getElementById('robot');

    var texto = texto_python.value;

    // Resetear el valor de la consola.
    texto_salida.value = "";
    actual_output_value = "";

    // Resetear errores
    error_inst = false;

    // Resetear arrays para las instrucciones.
    array_instrucciones = [];
    array_traducido = [];
    array_bucle = [];
    array_condicional = [];
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
                    actual_output_value = array_idioma[17];
                    console.log(actual_output_value);
                    btn.disabled = false;
                } else {
                    btn.disabled = true;
                }
            });
        }
    });
}


// La función ya detecta correctamente los comentarios simples y multilinea, falta ver que hacer con lo que no es comment (meter en array_instrucciones).
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


// Recibe un array de instrucciones y lo va recorriendo de manera recursiva.
async function crearSecuencia(instrucciones) {
        var img_player = document.getElementById('robot');
        var img_src = img_player.getAttribute("src");
        if (instrucciones.length == 0) {
            return true;
        }

        var inst = instrucciones.pop();

        if (inst.charAt(0) == 'r') {  // viene un condicional, hay que tratarlo de manera especial -> FORMATO: "condición (siempre empieza por R), instruccion1, instruccion2, ..."
            var array_temporal = inst.split(',');
            var orientacion_robot = array_temporal[0];
            if (img_src == orientacion_robot) {
                for (var i = 1; i < array_temporal.length; i++) {
                    await eval(array_temporal[i]).then(continuar => {
                        if (continuar == true) {
                                /* sigue con el bucle */
                        } else if (continuar == 2) {
                            // nivel superado
                            return true;
                        } else {
                            i = array_temporal.length;
                        }
                    })
                }
            }
        } else {  // Instrucciones normales
            // Modificar instrucciones en caso de estar el juego en Inglés, para llamar a las funciones que toca (implementado en castellano).
            if (inst.charAt(0) == 'f') {  // sustituir forward(x) -> avanza(x)
                inst = inst.replace("forward", "avanza");
            } else if (inst.charAt(0) == 't') {  // sustituir turn(x) -> gira(x)
                inst = inst.replace("turn", "gira");
            }

            eval(inst).then(continuar => {
                if (continuar == true) {
                    crearSecuencia(instrucciones);
                } else if (continuar == 2) {
                    return true;
                }
            })
        }
}


function ejecutarCodigo() {
    var btn = document.getElementById("ejecutarprog");
    array_traducido.reverse();
    console.log(array_traducido);
    var terminado = crearSecuencia(array_traducido);
    btn.disabled = true;
}

// Mueve el robot horizontalmente, habrá que juntar esto con el de subir...
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
                        case 0:
                            img_player.style.left = x + "px";
                            i+=1;
                            break;   
                        case 1:
                            resolve(true);
                            clearInterval(id);
                            break;
                        case 2:
                            texto_salida.value = array_idioma[19];
                            actual_output_value = array_idioma[19];
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
                if (img_player.offsetTop != 180) {
                    texto_salida.value = array_idioma[20];
                    actual_output_value = array_idioma[20];
                    img_player.src = "suelo_negro.png";
                    resolve(false);
                } else {
                    texto_salida.value = array_idioma[21];
                    actual_output_value = array_idioma[21];
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
                        case 0:
                            img_player.style.top = y + "px";
                            j+=1;
                            break;
                        case 1:
                            resolve(true);
                            clearInterval(id);
                            break;
                        case 2:
                            texto_salida.value = array_idioma[19];
                            actual_output_value = array_idioma[19];
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
        }
    })
}


// Gira la imagen de robot ngiros (si ngiros es > 0 -> sentido contrario agujas del reloj, si ngiros < 0 -> sentido agujas del reloj).
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

function matchExact(r, str) {
    var match = str.match(r);
    return match && str === match[0];
}

function crearArrayBucle(array, nrepeticiones) {
    return new Promise(function(resolve, reject) {
        if (array == []) {
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

function crearArrayCondicional(array, condicion) {
    return new Promise(function(resolve, reject) {
        var inst_norte = "robot_lateral.gif";
        var inst_sur = "robot_lateral_atras.gif";
        var inst_este = "robot_frente.gif";
        var inst_oeste = "robot_espalda.gif";

        condicion = condicion.substring(0, condicion.length - 2); // quitamos caracteres sobrantes
        console.log(condicion);

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

function crearTestCase(array, oraculo) {
    return new Promise(function(resolve,reject) {
        var texto_salida = document.getElementById('output');
        console.log(array);
        console.log(oraculo);
        console.log(actual_output_value);
        resolve();
    })
}

async function comprobarArray(array) {
    return new Promise(function(resolve,reject) {
        var texto_salida = document.getElementById('output');
        var terminado = false;
        var es_bucle = false;
        var es_condicional = false;
        var repeticiones = 0;
        var otro_condicional = false;
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
                        } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste) {
                            console.log(instruccion);  // inicio de otro condicional 
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
                            texto_salida.value = "CREAR ERROR: EN UN TESTCASE, LAS INSTRUCCIONES DEBEN IR IDENTADAS."
                        } else if (concuerda_repite || concuerda_repite_ident) {  // bucles no soportados en testcases. ERROR
                            texto_salida.value = "CREAR ERROR: EN UN TESTCASE NO PUEDEN HABER BUCLES";
                        } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste || concuerda_si_norte_ident|| concuerda_si_este_ident || concuerda_si_sur_ident || concuerda_si_oeste_ident) {  // condicionales no soportados
                            texto_salida.value = "CREAR ERROR: EN UN TESTCASE NO PUEDEN HABER CONDICIONALES.";
                        } else if (concuerda_testcase) {  // testcase sin cerrar el actual. ERROR.
                            texto_salida.value = "CREAR ERROR: NO SE PUEDEN COMBINAR TESTCASES. ACABA ESTE Y LUEGO INICIAS OTRO.";
                        } else if (concuerda_avanza_ident || concuerda_gira1_ident || concuerda_gira2_ident) {  // instruccion identada. OK
                            array_tcases.push(instruccion);
                        } else if (concuerda_assert_choca || concuerda_assert_noav || concuerda_assert_nocae || concuerda_assert_nopi) { // afirma final. OK.
                            crearTestCase(array_tcases, instruccion).then(() => {
                                es_tc = false;
                                array_tcases = [];
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
            } else {
                resolve(true);
            }
        }

        start();
    });
}
        /*}

        array.forEach(instruccion => {
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
                } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste) {
                    console.log(instruccion);  // inicio de otro condicional 
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
                    texto_salida.value = "CREAR ERROR: EN UN TESTCASE, LAS INSTRUCCIONES DEBEN IR IDENTADAS."
                } else if (concuerda_repite || concuerda_repite_ident) {  // bucles no soportados en testcases. ERROR
                    texto_salida.value = "CREAR ERROR: EN UN TESTCASE NO PUEDEN HABER BUCLES";
                } else if (concuerda_si_norte|| concuerda_si_este || concuerda_si_sur || concuerda_si_oeste || concuerda_si_norte_ident|| concuerda_si_este_ident || concuerda_si_sur_ident || concuerda_si_oeste_ident) {  // condicionales no soportados
                    texto_salida.value = "CREAR ERROR: EN UN TESTCASE NO PUEDEN HABER CONDICIONALES.";
                } else if (concuerda_testcase) {  // testcase sin cerrar el actual. ERROR.
                    texto_salida.value = "CREAR ERROR: NO SE PUEDEN COMBINAR TESTCASES. ACABA ESTE Y LUEGO INICIAS OTRO.";
                } else if (concuerda_avanza_ident || concuerda_gira1_ident || concuerda_gira2_ident) {  // instruccion identada. OK
                    array_tcases.push(instruccion);
                } else if (concuerda_assert_choca || concuerda_assert_noav || concuerda_assert_nocae || concuerda_assert_nopi) { // afirma final. OK.
                    crearTestCase(array_tcases, instruccion).then(() => {
                        es_tc = false;
                        array_tcases = [];
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
                    console.log(instruccion);
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
        });

        if (es_bucle) {
            crearArrayBucle(array_bucle, repeticiones).then(() => {
                resolve(true);
            })
        } else if (es_condicional) {
            crearArrayCondicional(array_condicional, condicion).then(() => {
                resolve(true);
            })
        } else {
            resolve(true);
        }
    });
}*/

// Función para dar información del error que hay en el código respecto a lo que ha introducido el usuario.
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
    var error_instruccion_struct_num = instruccion_actual.match(array_idioma[64]);
    var error_instruccion_struct_str = instruccion_actual.match(array_idioma[65]);
    var error_repite_puntos = matchExact(array_idioma[66], instruccion_actual);
    var error_si_puntos = matchExact(array_idioma[67], instruccion_actual);
    var error_condicion = matchExact(array_idioma[68], instruccion_actual);
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
    } else if (error_instruccion_nostruct_pos != null || error_instruccion_nostruct_neg != null || error_parametro_general != null) { // instruccion no existente
        texto_salida.value = array_idioma[23] + "" + instruccion_actual + array_idioma[24];
        error_inst = true;
    } else if (error_repite_puntos || error_si_puntos) { // caracter : no usado en estructuras repite, condicional y testcase
        texto_salida.value = array_idioma[27];
        error_inst = true;
    } else if (error_condicion) {  // no existe la condición
        texto_salida.value = array_idioma[71];
        error_inst = true;
    } else if (error_instruccion_struct_num != null || error_instruccion_struct_str != null) {  // estructura errónea
        texto_salida.value = array_idioma[72];
        error_inst = true;
    }

    return true;
}


// pos_actual: posición del robot.
// direccion = 1 -> comprobar colisión horizontal; dirección = 2 -> comprobar colisión vertical
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

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}


function limpiar_nivel() {
        var id = null;
        var escenario = document.getElementById('escenario');
        var texto_salida = document.getElementById('output');
        var img_player = document.getElementById('robot');
        var btn = document.getElementById('ejecutarprog');
        btn.disabled = true;
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