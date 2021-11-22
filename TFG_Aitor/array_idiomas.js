/* Fichero para los arrays con los string necesarios para el juego en diferentes idiomas
* Si se quiere añadir otro idioma al juego, simplemente crear un nuevo array para el idioma. IMPORTANTE respetar los índices del array.
*/

const array_esp = ["Juego sencillo para introducir a la programación en Python",
"Traducir a robot", "Ejecutar programa", "Reducir Nivel", "Aumentar Nivel",
"''' NIVEL 1" + '\n' + 'Este juego tiene un objetivo: Conseguir que el robot llegue al final del nivel.' + '\n' + '\n' + 
'Para conseguirlo, tenemos que ordenar al personaje que haga ciertos movimientos -> Estos movimientos son las instrucciones del programa, que deben ser escritas en este panel.'
+ ' Estas instrucciones deben estar escritas en lenguaje Python, y se traducirán a un lenguaje que el robot entienda para cargarlas y que se ejecuten.'
+ '\n' + '\n' + 'En cada nivel se presentará un reto diferente para aprender las reglas del juego paso a paso. Veremos diferentes obstáculos que se tratan de manera diferente.'
+ '\n' + 'Este primer nivel es el más sencillo, prueba a ejecutar la instrucción...' + '\n' + "'''" + '\n' + '\n' + 'avanza(4)',
"''' NIVEL 2" + '\n' + 'Ya hemos visto el funcionamiento del juego y de la instrucción avanza(x), donde x es el número de casillas que avanza el robot.' + '\n' +
'Este segundo nivel ya es un poco más difícil. Ahora necesitamos algo más. Prueba a ejecutar la secuencia que se ve...' + '\n' + '\n' + '- El robot gira en sentido de las agujas del reloj con la instrucción gira(-x). ' 
+ '\n' + '- El robot gira en sentido contrario de las agujas del reloj con la instrucción gira(x). ' + '\n' + "'''" + '\n' + '\n' + 'avanza(5)' + '\n' + 'gira(-1)',
"''' NIVEL 3" + '\n' + 'Introducimos ahora un nuevo obstáculo con pinchos. Es más pequeño pero más peligroso!!. Ejecuta para ver qué pasa si chocas con él...'
+ '\n' + "'''" + '\n' + '\n' + 'avanza(6)',
"''' NIVEL 4" + '\n' + 'Este nivel es más complejo porque la primera fila de obstáculos es aleatoria, por lo que la solución del nivel es diferente cada vez.' + '\n' 
+ "'''" + '\n' + '\n' + 'gira(-1)' + '\n' + 'avanza(2)' + '\n' + 'gira(1)',
"''' NIVEL 5" + '\n' + 'El nivel 5 es una variante del nivel 4. Hay un obstáculo aleatorio que varía su posición. Ten cuidado con él y superarás el nivel!!' + '\n' + "'''" + '\n' +
'\n' + 'avanza(5)',
"''' NIVEL 6" + '\n' + 'Ten cuidado con este nivel, con solo un movimiento erróneo puedes acabar dentro de un callejón sin salida!!' + '\n' + "'''" + '\n' + '\n' + 'avanza(5)',
"''' NIVEL 7" + '\n' + 'En este nivel se introducen las repeticiones de movimientos (bucles). Para evitar escribir mucho texto, se pueden crear repeticiones.' + '\n' 
+ 'Prueba a ejectuar el código que te ofrecemos, y observa con detenimiento los espacios que se dejan antes de las instrucciones dentro de la repetición.' + '\n' + 
"OJO: Si no dejas 2 espacios ESTRICTAMENTE, no se va a repetir lo que pongas debajo del repite(x):" + '\n' + "'''" + '\n' + '\n' + 'repite(4):' + '\n' 
+ "  avanza(2)" + '\n' + "  gira(1)",
"''' NIVEL 8" + '\n' + 'Este nivel es completamente aleatorio, y hay solo un espacio por el que se puede pasar, así que ve con mucho cuidado para superar este nivel.' +
'\n' + 'Es recomendable intentar superar este nivel más de una vez para probar las diferentes soluciones posibles.' + '\n' + "'''" + '\n' + '\n' + 'avanza(6)' + '\n' + 'gira(-1)',
"''' NIVEL 9" + '\n' + "El juego ya está complicándose bastante. Este nivel es aleatorio también, pero vamos a introducir una nueva estructura: CONDICIONALES." +
'\n' + 'Los condicionales se basan en la certeza de una condición para ejecutar ciertas instrucciones. En caso de no cumplirse la condición, no se van a ejecutar. '  + '\n' +
'PISTA: Las condiciones que el robot entiende dependen de su orientación en el tablero: robot_sur, robot_este, robot_norte y robot_oeste. Para ayudarte más, el robot ahora mismo mira hacia el Norte, y los botones de '  
+ 'Reducir Nivel y Aumentar Nivel se encuentran al Este del robot. Con esto, ya debes de poder usar los condicionales!!' + '\n' + '\n' + 'IMPORTANTE: Mucha atención con los espacios, ya que sucede igual que en el caso del repite(x):' 
+ '\n' + "'''" + '\n' + '\n' + 'si(robot_norte):' + '\n' + '  avanza(1)' + '\n' + '  gira(-1)' + '\n' + 'si(robot_oeste):' + '\n' + '  gira(1)' + '\n' + '  avanza(2)' + '\n' + '  gira(-1)',
"''' NIVEL 10" + '\n' + 'Nos  acercamos al final del juego. Los niveles 11 y 12, como podrás ver, se han diseñado para enseñar el último concepto del juego.' + '\n' + 'El nivel 10 no aporta nada nuevo, pero es uno de los niveles más difícil de superar!!' 
+ '\n' + 'Es un nivel completamente aleatorio, excepto la última fila de todas, que si hubiera sido también aleatoria podría cerrar el acceso a la platorma final y el nivel sería imposible de superar.' + '\n' + "'''" + '\n' + '\n' + 'avanza(9)',
"''' NIVEL 11" + '\n' + 'En este nivel 11, casi terminando el juego, se introduce el concepto de testing de código. El testing es una herramienta muy usada para validar el código mediante casos de prueba sobre el estado del programa ' +
'tras una serie de eventos que modifican el estado.' + '\n' + '\n' + 'FUNCIONAMIENTO: La estructura a seguir la puedes ver abajo. Hay que dar un identificador a los casos de prueba para poder ver el resultado. El formato del identificador tiene que ' + 
'ser testcase y un número sin espacios (tal y como se ve abajo).' + '\n' +  
'Luego hay que introducir una serie de instrucciones que van a modificar el estado del programa. Por último, escribir el oráculo, que es el estado que queremos comprobar tras la ejecución de las instrucciones.' + '\n' +
'ORÁCULO: La instrucción afirma(estado) es la que fija el oráculo. Los estados posibles son no_avanza (verificar que el robot ha colisionado con un obstáculo liso), pincha (verificar que el robot ha colisionado con un obstáculo de pinchos), ' +
'choca(verificar que el robot ha llegado a los límites del tablero) y no_cae(verificar que el robot no cae al vacío).' + '\n' + "'''" + '\n' + '\n' + 'testcase1:  #Esto es el identificador' + '\n' + '  avanza(4)  #Esta es la secuencia de instrucciones'
+ '\n' + '  afirma(pincha)  #Esto es el Oráculo',
"''' NIVEL 12" + '\n' + 'Con este nivel se termina el juego. Es el nivel más difícil de solucionar, por lo que superar este nivel es pasarse el juego.' + '\n' + 'Prueba a hacer algunos casos de prueba antes de solucionar el nivel!' + '\n' + "'''"
+ '\n' + '\n' + 'testcase1:' + '\n' + '  gira(-1)' + '\n' + '  avanza(3)' + '\n' + '  afirma(pincha)',
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
"ERROR. Las estructuras tienen que acabar con el carácter ':'" + "\n" + "Por ejemplo: repite(6):",
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
/avanza\d+\)/g, /avanza\(\d+/g, /gira\d+\)/g, /gira\(\d+/g, /gira-\d+\)/g, /gira\(-\d+/g, /avanza\(\)/, /gira\(\)/, /repite\(\):/, /si\(\):/, /\w+\(\d+\)/, /\w+\(\d+\):/, /\w+\(\w+\):/,
/repite\(\d+\)/, /si\(\w+\)/, /si\(\w+\):/, /\w+\(-\d+\)/, /\w+\(\)/,
//POSICIÓN 71
"Condición NO existente..." + '\n' + "Condiciones: robot_norte, robot_sur, robot_este, robot_oeste", "ERROR. Estructura errónea.",
//POSICIÓN 73
/testcase\d+\:/, /  afirma\(no_avanza\)/, /  afirma\(pincha\)/, /  afirma\(choca\)/, /  afirma\(no_cae\)/,
"Enhorabuena, has superado el nivel!!" + '\n' + "La solución no es la más eficiente. Intenta superar el nivel con menos instrucciones o con parámetros más pequeños!!",
"Enhorabuena, has superado el nivel!!" + '\n' + "Además, has encontrado la solución más eficiente. Muy bien!!",
//POSICIÓN 80   
"ERROR. Los testcases tienen que acabar con la instrucción afirma(estado).",
"ERROR. El identificador ", " ya existe.",
"  afirma(no_avanza)", "  afirma(pincha)", "  afirma(choca)", "  afirma(no_cae)",
//POSICIÓN 87
"ERROR. Las instrucciones dentro de la estructura testcase deben respetar la identación de Python.",
"ERROR. No puede haber bucles dentro de una estructura testcase!!",
"ERROR. No puede haber condicionales dentro de una estructura testcase!!",
"ERROR. No se pueden combinar testcases!! Acaba este y luego inicia otro.",
//POSICIÓN 91
/afirma\(no_avanza\)/, /afirma\(pincha\)/, /afirma\(choca\)/, /afirma\(no_cae\)/,
"ERROR. La instrucción afirma() tiene que respetar la identación de Python!!",
/  afirma\(\w+\)/, "ERROR. Oráculo no existente. Oráculos disponibles: no_avanza, pincha, choca, no_cae", /  testcase\d+\:/,
// POSICIÓN 99
/testcase\d+/, /\si\(\w+\)/, /avanza\(\w+\)/, /gira\(\w+\)/, /repite\(\w+\):/, /si\(\d+\):/, /afirma\(\d+\)/,
// POSICIÓN 106
"ERROR. El tipo del parámetro es erróneo. Las instrucciones avanza, gira y repite reciben un número; las instrucciones si y afirma reciben cadenas de texto"
];

const array_eng = ["Easy game to introduce programming in Python",
"Translate to robot", "Execute program", "Reduce Level", "Increase Level",
"''' LEVEL 1" + '\n' + 'This game has only one objective: Help the robot to reach the end of the level by going through the door.' + '\n' + '\n' + 
'To do it, we must give the robot instructions to make certain movements. These instructions make up our program and should be written in this panel.'
+ ' The instructions must be written using the language Python, when you click the button -Translate to robot- they will be translated to a language that the robot can understand and execute.'
+ '\n' + '\n' + 'This is the first level of this game. At each level, we will face a different challenge and learn the game rules step by step. We will face different types of obstacles, each one working in a different way'
+ '\n' + 'This first level is the easiest one, try to execute the instruction below...' + '\n' + "'''" + '\n' + '\n' + 'forward(4)',
"''' LEVEL 2" + '\n' + 'We have already seen how the game and the instruction forward(x) work. When calling forward(x), x is the number of steps the robot moves on x axis.' + '\n' +
'This second level is a bit more difficult. We will add an instruction to turn the robot around.' + '\n' + '\n' + '- Robot turns clockwise with instruction turn(-x). ' 
+ '\n' + '- Robot turns counter clockwise with instruction turn(x).' +'\n' + 'Try to execute the instructions sequence...\n'  + "'''" + '\n' + '\n' + 'forward(5)' + '\n' + 'turn(-1)',
"''' LEVEL 3" + '\n' + 'In this level we introduce a new spiked obstacle. It is smaller but more dangerous!!. Execute the given sequence to see what happens when you collide with it...  After that, solve the challenge. '
+ '\n' + "'''" + '\n' + '\n' + 'forward(6)',
"''' LEVEL 4" + '\n' + 'This level is even more difficult because the first obstacles row is placed in random order, so the solution for this level is different each time you play this level.' + '\n'  + 'Nevertheless you have to find a solution that works with all possible placements of the obstacles.\n' 
+ "'''" + '\n' + '\n' + 'turn(-1)' + '\n' + 'forward(2)' + '\n' + 'turn(1)',
"''' LEVEL 5" + '\n' + 'Level 5 is a modification of level 4. There is one random obstacle that changes its position. Stay alert and you will succeed!!' + '\n' + "'''" + '\n' +
'\n' + 'forward(5)',
"''' LEVEL 6" + '\n' + "Take care with this level, by executing only one wrong movement you may find yourself in a dead end!!" + '\n' + "'''" + '\n' + '\n' + 'forward(5)',
"''' LEVEL 7" + '\n' + 'In this level we are introducing loops. Repetitions are usefull when we need to repeat the same instruction several times. A loop is a control structure which allows a block of instructions, the loop body, to be executed repeatedly in succession.' + '\n' 
+ 'Try to execute the given code, be aware of the spaces (identation) before the instructions that are in the loop body.' + '\n' + 
"IMPORTANT: If you forget to put EXACTLY 2 spaces in from of the instructions, they are not part of the loop body and hence they will not be repeated." + '\n' + "'''" + '\n' + '\n' + 'repeat(4):' + '\n' 
+ "  forward(2)" + '\n' + "  turn(1)",
"''' LEVEL 8" + '\n' + 'In this level the placement of all obstancles is completely random, and there is only one gap  in the obstacle-rows where the robot can go forward, so think and be careful to success on level 8.' +
'\n' + 'It is good to try to complete this level more than once to try some possible different solutions.' + '\n' + "'''" + '\n' + '\n' + 'forward(6)' + '\n' + 'turn(-1)',
"''' LEVEL 9" + '\n' + "The game is already getting more difficult. This level also has random obstacles. Moreover, we are introducing a new control structure: CONDITIONALS." +
'\n' + 'Conditionals are based on a condition whose value decides whether or not to execute some instructions. If the condition is not true, instructions are not executed. '  + '\n' +
"CLUE: The conditions understood by the robot are depending on its orientation on the game: south_robot, east_robot, north_robot and west_robot." + " To help you, the robot in its starting position is oriented to the North, "
+ 'and the buttons -Reduce Level- and -Increase Level- are placed on the East. Now that you know this, you can use conditionals!!' + '\n' + '\n' + 'IMPORTANT: Take care about the identation, conditionals work only with the right identation of 2 spaces as the repeat(x) structure.'
 + '\n' + "'''" + '\n' + '\n' + 'if(north_robot):' + '\n' + '  forward(1)' + '\n' + '  turn(-1)' + '\n' + 'if(west_robot):' + '\n' + '  turn(1)' + '\n' + '  forward(2)' + '\n' + '  turn(-1)',
"''' LEVEL 10" + '\n' + 'We are almost at the end of the game. As you will see, level 11 and 12 are designed to show the last programming concepts.' + '\n' + 'Level 10 has nothing new, but solving this level will be really difficult!!' 
+ '\n' + 'This level is full of randomly places obstacles except for the last obstacles row, that cannot be random because it might create an impossible level.' + '\n' + "'''" + '\n' + '\n' + 'forward(9)',
"''' LEVEL 11" + '\n' + 'In this level 11, testing is introduced. Testing is a very useful way to validate code by creating test cases ' +
', taking in acount some events that modify the program state.' + '\n' + '\n' + 'HOW IT WORKS: The structure is shown below outside the comment. First, we must give a different identifier to each test case, so we can identify it when we check the results. ' +
"The identifier should start with the word testcase and a number without blank spaces (as done below in the example)." + '\n' +  
'Then we must write the instructions that will modify the program state. Last, we need the oracle, that checks that we are in the desired state after executing the instructions.' + '\n' +
'ORACLE: Oracles are defined by assert(state) instructions. The possible states are:\n\n - not_forwards (robot collided with a normal obstacle and cannot go forward),\n - stabbed (robot collided with a spiked obstacle and was stabbed),\n ' +
'- collides(robot has reached the outside limits from scenario), and \n - not_falls(robot did not fall from scenario).' + '\n' + "'''"+ '\n' + '\n' + 'testcase1:  #This is the identifier' + '\n' + '  forward(4)  #This is the instructions sequence'
+ '\n' + '  assert(stabbed)  #This is the Oracle',
"''' LEVEL 12"+ '\n' + 'This level ends the game. It is the most difficult level, so completing this level literally means passing the game.' + '\n' + 'Try to execute some testcases to check different states before finding the solution!' + '\n' + "'''"
+ '\n' + '\n' + 'testcase1:' + '\n' + '  turn(-1)' + '\n' + '  forward(3)' + '\n' + '  assert(stabbed)',
" ** Program correctly translated **",
"ERROR, missing ''' to close comment!!",
"CARE!! Robot collided with spiked obstacle...",
"Robot fell into the emptiness :( , try again!!!",
"Congratulations, you have completed the level!!",
"ERROR. You can't use instruction repeat() inside another repeat()",
"ERROR. Instruction ",
" not found...",
"ERROR in parenthesis, the correct way is: instruction(parameter)." + "\n"
+ "For example: forward(5)",
"ERROR. You haven't written any input parameter.",
"ERROR. Structures must end with character ':'" + "\n" 
+ "For example: repeat(6):",
"ERROR. Loops with repeat(x) can't be created inside conditional structures.",
"ERROR. Conditional structures can't be created inside other conditionals." + '\n' + 'To create other conditions, write them in new lines.',
"ERROR. Conditional structures can't be created inside repeat(x).",
"You can't reduce the level any more!!!",
"You can't increase the level any more!!",
// POSICIÓN 33 REGEX
/forward\(\d+\)/, /turn\(\d+\)/, /turn\(-\d+\)/, /repeat\(\d+\):/, /if\(south_robot\):/, /if\(north_robot\):/, /if\(east_robot\):/, /if\(west_robot\):/,
/  repeat\(\d+\):/, /  forward\(\d+\)/, /  turn\(\d+\)/, /  turn\(-\d+\)/, /  if\(south_robot\):/, /  if\(north_robot\):/, /  if\(east_robot\):/, /  if\(west_robot\):/,
"north_robot", "south_robot", "east_robot", "west_robot",
//POSICIÓN 53 REGEX ERRORES
/forward\d+\)/g, /forward\(\d+/g, /turn\d+\)/g, /turn\(\d+/g, /turn-\d+\)/g, /turn\(-\d+/g, /forward\(\)/, /turn\(\)/, /repeat\(\):/, /if\(\):/, /\w+\(\d+\)/, /\w+\(\d+\):/, /\w+\(\w+\):/,
/repeat\(\d+\)/, /if\(\w+\)/, /if\(\w+\):/, /\w+\(-\d+\)/, /\w+\(\)/,
//POSICIÓN 71
"Condition NOT found..." + '\n' + "Available conditions: north_robot, south_robot, east_robot, west_robot", "ERROR. Wrong structure.",
/testcase\d+\:/, /  assert\(not_forwards\)/, /  assert\(stabbed\)/, /  assert\(collides\)/, /  assert\(not_falls\)/,
"Congratulations, you have completed the level!!" + '\n' + "Your solution is not the most efficient. Try again by using less instructions or by using smaller parameters!!",
"Congratulations, you have completed the level!!" + '\n' + "You also found the most efficient solution. Good job!!",
//POSICIÓN 80
"ERROR. Testcases must finish with the instruction assert(state).",
"ERROR. Testcase identifier ", " already exists.",
"  assert(not_forwards)", "  assert(stabbed)", "  assert(collides)", "  assert(not_falls)",
//POSICIÓN 87
"ERROR. Inside a testcase structure, instructions must respect Python identation!!",
"ERROR. Loops are not allowed inside a testcase structure!!",
"ERROR. Conditionals are not allowed inside a testcase structure!!",
"ERROR. You can't combine testcases!! First, close this one, and then create another.",
//POSICIÓN 91
/assert\(not_forwards\)/, /assert\(stabbed\)/, /assert\(collides\)/, /assert\(not_falls\)/,
"ERROR. Instruction assert() must respect Python identation!!",
/  assert\(\w+\)/, "ERROR. Oracle NOT found. Available oracles: not_forwards, stabbed, collides, not_falls", /  testcase\d+\:/,
// POSICIÓN 99
/testcase\d+/, /if\(\w+\)/, /forward\(\w+\)/, /turn\(\w+\)/, /repeat\(\w+\):/, /if\(\d+\):/, /assert\(\d+\)/,
// POSICIÓN 106
"ERROR. Parameter type is wrong. Forward, turn and repeat need a number; if and assert need a text string"
];