/* Fichero para los maps con los string necesarios para el juego en diferentes idiomas.
   Si se quiere añadir otro idioma al juego, simplemente crear un nuevo map para el idioma. IMPORTANTE respetar los nombres de los índices del map. */

// ESPAÑOL
let map_esp = new Map();
map_esp.set('avanza', "avanza");
map_esp.set('gira', "gira");

map_esp.set('titulo', "Juego sencillo para introducir a la programación en Python");
map_esp.set('btnTraducir', "Traducir a robot");
map_esp.set('btnEjecutar', "Ejecutar programa");
map_esp.set('btnNivelMenos', "Reducir Nivel");
map_esp.set('btnNivelMas', "Aumentar Nivel");
map_esp.set('nivel1', "''' NIVEL 1\nEste juego tiene un objetivo: Conseguir que el robot llegue al final del nivel.\n\nPara conseguirlo, tenemos que ordenar al personaje que haga ciertos movimientos -> Estos movimientos son las instrucciones del programa, que deben ser escritas en este panel. Estas instrucciones deben estar escritas en lenguaje Python, y se traducirán a un lenguaje que el robot entienda para cargarlas y que se ejecuten.\n\nEn cada nivel se presentará un reto diferente para aprender las reglas del juego paso a paso. Veremos diferentes obstáculos que se tratan de manera diferente.\nEste primer nivel es el más sencillo, prueba a ejecutar la instrucción...\n'''\n\navanza(4)");
map_esp.set('nivel2', "''' NIVEL 2\nYa hemos visto el funcionamiento del juego y de la instrucción avanza(x), donde x es el número de casillas que avanza el robot.\n\nEste segundo nivel ya es un poco más difícil. Ahora necesitamos algo más. Prueba a ejecutar la secuencia que se ve...\n\n- El robot gira en sentido de las agujas del reloj con la instrucción gira(-x).\n- El robot gira en sentido contrario de las agujas del reloj con la instrucción gira(x).\n'''\n\navanza(5)\ngira(-1)");
map_esp.set('nivel3', "''' NIVEL 3\nIntroducimos ahora un nuevo obstáculo con pinchos. Es más pequeño pero más peligroso!!. Ejecuta para ver qué pasa si chocas con él...\n'''\n\navanza(6)");
map_esp.set('nivel4', "''' NIVEL 4\nEste nivel es más complejo porque la primera fila de obstáculos es aleatoria, por lo que la solución del nivel es diferente cada vez.\n'''\n\ngira(-1)\navanza(2)\ngira(1)");
map_esp.set('nivel5', "''' NIVEL 5\nEl nivel 5 es una variante del nivel 4. Hay un obstáculo aleatorio que varía su posición. Ten cuidado con él y superarás el nivel!!\n'''\n\navanza(5)");
map_esp.set('nivel6', "''' NIVEL 6\nTen cuidado con este nivel, con solo un movimiento erróneo puedes acabar dentro de un callejón sin salida!!\n'''\n\navanza(5)");
map_esp.set('nivel7', "''' NIVEL 7\nEn este nivel se introducen las repeticiones de movimientos (bucles). Para evitar escribir mucho texto, se pueden crear repeticiones.\n\nPrueba a ejecutar el código que te ofrecemos, y observa con detenimiento los espacios que se dejan antes de las instrucciones dentro de la repetición.\nOJO: Si no dejas 2 espacios ESTRICTAMENTE, no se va a repetir lo que pongas debajo del repite(x):\n'''\n\nrepite(4):\n  avanza(2)\n  gira(1)");
map_esp.set('nivel8', "''' NIVEL 8\nEste nivel es completamente aleatorio, y hay solo un espacio por el que se puede pasar, así que ve con mucho cuidado para superar este nivel.\nEs recomendable intentar superar este nivel más de una vez para probar las diferentes soluciones posibles.\n'''\n\navanza(6)\ngira(-1)");
map_esp.set('nivel9', "''' NIVEL 9\nEl juego ya está complicándose bastante. Este nivel es aleatorio también, pero vamos a introducir una nueva estructura: CONDICIONALES.\nLos condicionales se basan en la certeza de una condición para ejecutar ciertas instrucciones. En caso de no cumplirse la condición, no se van a ejecutar.\nPISTA: Las condiciones que el robot entiende dependen de su orientación en el tablero: robot_sur, robot_este, robot_norte y robot_oeste. Para ayudarte más, el robot ahora mismo mira hacia el Norte. Fíjate en la brújula. Con esto, ya debes de poder usar los condicionales!!\n\nIMPORTANTE: Mucha atención con los espacios, ya que sucede igual que en el caso del repite(x):\n'''\n\nsi(robot_norte):\n  avanza(1)\n  gira(-1)\nsi(robot_oeste):\n  gira(1)\n  avanza(2)\n  gira(-1)");
map_esp.set('nivel10', "''' NIVEL 10\nNos  acercamos al final del juego. Los niveles 11 y 12, como podrás ver, se han diseñado para enseñar el último concepto del juego.\nEl nivel 10 no aporta nada nuevo, pero es uno de los niveles más difícil de superar!!\nEs un nivel completamente aleatorio, excepto la última fila de todas, que si hubiera sido también aleatoria podría cerrar el acceso a la plataforma final y el nivel sería imposible de superar.\n'''\n\navanza(9)");
map_esp.set('nivel11', "''' NIVEL 11\nEn este nivel 11, casi terminando el juego, se introduce el concepto de testing de código. El testing es una herramienta muy usada para validar el código mediante casos de prueba sobre el estado del programa tras una serie de eventos que modifican el estado.\n\nFUNCIONAMIENTO: La estructura a seguir la puedes ver abajo. Hay que dar un identificador a los casos de prueba para poder ver el resultado. El formato del identificador tiene que ser testcase y un número sin espacios (tal y como se ve abajo).\nLuego hay que introducir una serie de instrucciones que van a modificar el estado del programa. Por último, escribir el oráculo, que es el estado que queremos comprobar tras la ejecución de las instrucciones.\nORÁCULO: La instrucción afirma(estado) es la que fija el oráculo. Los estados posibles son no_avanza (verificar que el robot ha colisionado con un obstáculo liso), pincha (verificar que el robot ha colisionado con un obstáculo de pinchos), choca(verificar que el robot ha llegado a los límites del tablero) y no_cae(verificar que el robot no cae al vacío).\n'''\n\ntestcase1:  #Esto es el identificador\n  avanza(4)  #Esta es la secuencia de instrucciones\n  afirma(pincha)  #Esto es el Oráculo");
map_esp.set('nivel12', "''' NIVEL 12\nCon este nivel se termina el juego. Es el nivel más difícil de solucionar, por lo que superar este nivel es pasarse el juego.\nPrueba a hacer algunos casos de prueba antes de solucionar el nivel!\n'''\n\ntestcase1:\n  gira(-1)\n  avanza(3)\n  afirma(pincha)");
map_esp.set('nivel13',"''' NIVEL 13\nInstrucción while....\n'''\n\nmientras(x<3):\n  avanza(2)\n  gira(1)");

map_esp.set('17', " ** Programa traducido correctamente **");
map_esp.set('18', "Error, falta ''' para cerrar el comentario!!");
map_esp.set('19', "CUIDADO!! El robot se ha chocado con los pinchos...");
map_esp.set('20', "El robot ha caído al vacío :( , vuelve a intentarlo!!!");
map_esp.set('21', "Enhorabuena, has superado el nivel!!");
map_esp.set('22', "ERROR. No se puede hacer un repite() dentro de otro repite()");
map_esp.set('23', "ERROR. La instrucción ");
map_esp.set('24', " no existe...");
map_esp.set('25', "ERROR con los paréntesis, la estructura es: instrucción(parámetro).\nPor ejemplo: avanza(5)");
map_esp.set('26', "ERROR. No has puesto parámetro de entrada.");
map_esp.set('27', "ERROR. Las estructuras tienen que acabar con el carácter ':'\nPor ejemplo: repite(6):");
map_esp.set('28', "ERROR. No se puede iniciar un bucle con repite(x) dentro de un condicional.");
map_esp.set('29', "ERROR. No se puede iniciar un condicional dentro de otro condicional.\nPara crear más condiciones, hazlo en otra línea.");
map_esp.set('30', "ERROR. No se pueden crear condiciones dentro de un repite(x).");
map_esp.set('31', "No se puede decrementar más el nivel!!");
map_esp.set('32', "No se puede aumentar más el nivel!!");
map_esp.set('49', "robot_norte");
map_esp.set('50', "robot_sur");
map_esp.set('51', "robot_este");
map_esp.set('52', "robot_oeste");
map_esp.set('71', "Condición NO existente...\nCondiciones: robot_norte, robot_sur, robot_este, robot_oeste");
map_esp.set('72', "ERROR. Estructura errónea.");
map_esp.set('78', "Enhorabuena, has superado el nivel!!\nLa solución no es la más eficiente. Intenta superar el nivel con menos instrucciones o con parámetros más pequeños!!");
map_esp.set('79', "Enhorabuena, has superado el nivel!!\nAdemás, has encontrado la solución más eficiente. Muy bien!!");
map_esp.set('80', "ERROR. Los testcases tienen que acabar con la instrucción afirma(estado).");
map_esp.set('81', "ERROR. El identificador ");
map_esp.set('82', " ya existe.");
map_esp.set('83', "  afirma(no_avanza)"); 
map_esp.set('84', "  afirma(pincha)");
map_esp.set('85', "  afirma(choca)");
map_esp.set('86', "  afirma(no_cae)");
map_esp.set('87', "ERROR. Las instrucciones dentro de la estructura testcase deben respetar la identación de Python.");
map_esp.set('88', "ERROR. No puede haber bucles dentro de una estructura testcase!!");
map_esp.set('89', "ERROR. No puede haber condicionales dentro de una estructura testcase!!");
map_esp.set('90', "ERROR. No se pueden combinar testcases!! Acaba este y luego inicia otro.");
map_esp.set('95', "ERROR. La instrucción afirma() tiene que respetar la identación de Python!!");
map_esp.set('97', "ERROR. Oráculo no existente. Oráculos disponibles: no_avanza, pincha, choca, no_cae");
map_esp.set('106', "ERROR. El tipo del parámetro es erróneo. Las instrucciones avanza, gira y repite reciben un número; las instrucciones si y afirma reciben cadenas de texto");

// INGLES
let map_eng = new Map();
map_eng.set('gira', "turn");
map_eng.set('avanza', "forward");
map_eng.set('titulo', "Easy game to introduce programming in Python");
map_eng.set('btnTraducir', "Traslate to robot");
map_eng.set('btnEjecutar', "Execute program");
map_eng.set('btnNivelMenos', "Reduce Level");
map_eng.set('btnNivelMas', "Increase Level");
map_eng.set('nivel1', "''' LEVEL 1\nThis game has only one objective: Help the robot to reach the end of the level by going through the door.\n\nTo do it, we must give the robot instructions to make certain movements. These instructions make up our program and should be written in this panel.The instructions must be written using the language Python, when you click the button -Translate to robot- they will be translated to a language that the robot can understand and execute.\n\nThis is the first level of this game. At each level, we will face a different challenge and learn the game rules step by step. We will face different types of obstacles, each one working in a different way.\nThis first level is the easiest one, try to execute the instruction below...\n'''\n\nforward(4)");
map_eng.set('nivel2', "''' LEVEL 2\nWe have already seen how the game and the instruction forward(x) work. When calling forward(x), x is the number of steps the robot moves on x axis.\nThis second level is a bit more difficult. We will add an instruction to turn the robot around.\n\n- Robot turns clockwise with instruction turn(-x).\n- Robot turns counter clockwise with instruction turn(x).\nTry to execute the instructions sequence...\n'''\n\nforward(5)\nturn(-1)");
map_eng.set('nivel3', "''' LEVEL 3\nIn this level we introduce a new spiked obstacle. It is smaller but more dangerous!!. Execute the given sequence to see what happens when you collide with it...  After that, solve the challenge.\n'''\n\nforward(6)");
map_eng.set('nivel4', "''' LEVEL 4\nThis level is even more difficult because the first obstacles row is placed in random order, so the solution for this level is different each time you play this level.\nNevertheless you have to find a solution that works with all possible placements of the obstacles.\n'''\n\nturn(-1)\nforward(2)\nturn(1)");
map_eng.set('nivel5', "''' LEVEL 5\nLevel 5 is a modification of level 4. There is one random obstacle that changes its position. Stay alert and you will succeed!!\n'''\n\nforward(5)");
map_eng.set('nivel6', "''' LEVEL 6\nTake care with this level, by executing only one wrong movement you may find yourself in a dead end!!\n'''\n\nforward(5)");
map_eng.set('nivel7', "''' LEVEL 7\nIn this level we are introducing loops. Repetitions are usefull when we need to repeat the same instruction several times. A loop is a control structure which allows a block of instructions, the loop body, to be executed repeatedly in succession.\nTry to execute the given code, be aware of the spaces (identation) before the instructions that are in the loop body.\nIMPORTANT: If you forget to put EXACTLY 2 spaces in from of the instructions, they are not part of the loop body and hence they will not be repeated.\n'''\n\nrepeat(4):\n  forward(2)\n  turn(1)");
map_eng.set('nivel8', "''' LEVEL 8\nIn this level the placement of all obstancles is completely random, and there is only one gap  in the obstacle-rows where the robot can go forward, so think and be careful to success on level 8.\nIt is good to try to complete this level more than once to try some possible different solutions.\n'''\n\nforward(6)\nturn(-1)");
map_eng.set('nivel9', "''' LEVEL 9\nThe game is already getting more difficult. This level also has random obstacles. Moreover, we are introducing a new control structure: CONDITIONALS.\nConditionals are based on a condition whose value decides whether or not to execute some instructions. If the condition is not true, instructions are not executed.\nCLUE: The conditions understood by the robot are depending on its orientation on the game: south_robot, east_robot, north_robot and west_robot.To help you, the robot in its starting position is oriented to the North, and the buttons -Reduce Level- and -Increase Level- are placed on the East. Now that you know this, you can use conditionals!!\n\nIMPORTANT: Take care about the identation, conditionals work only with the right identation of 2 spaces as the repeat(x) structure.\n'''\n\nif(north_robot):\n  forward(1)\n  turn(-1)\nif(west_robot):\n  turn(1)\n  forward(2)\n  turn(-1)");
map_eng.set('nivel10', "''' LEVEL 10\nWe are almost at the end of the game. As you will see, level 11 and 12 are designed to show the last programming concepts.\nLevel 10 has nothing new, but solving this level will be really difficult!!\nThis level is full of randomly places obstacles except for the last obstacles row, that cannot be random because it might create an impossible level.\n'''\n\nforward(9)");
map_eng.set('nivel11', "''' LEVEL 11\nIn this level 11, testing is introduced. Testing is a very useful way to validate code by creating test cases, taking in acount some events that modify the program state.\n\nHOW IT WORKS: The structure is shown below outside the comment. First, we must give a different identifier to each test case, so we can identify it when we check the results. The identifier should start with the word testcase and a number without blank spaces (as done below in the example).\nThen we must write the instructions that will modify the program state. Last, we need the oracle, that checks that we are in the desired state after executing the instructions.\nORACLE: Oracles are defined by assert(state) instructions. The possible states are:\n\n - not_forwards (robot collided with a normal obstacle and cannot go forward),\n - stabbed (robot collided with a spiked obstacle and was stabbed),\n - collides(robot has reached the outside limits from scenario), and \n - not_falls(robot did not fall from scenario).\n'''\n\ntestcase1:  #This is the identifier\n  forward(4)  #This is the instructions sequence\n  assert(stabbed)  #This is the Oracle");
map_eng.set('nivel12', "''' LEVEL 12\nThis level ends the game. It is the most difficult level, so completing this level literally means passing the game.\nTry to execute some testcases to check different states before finding the solution!\n'''\n\ntestcase1:\n  turn(-1)\n  forward(3)\n  assert(stabbed)");
map_eng.set('nivel13',"''' NIVEL 13\nWhile instruction....\n'''\n\nmientras(x<3):\n  avanza(2)\n  gira(1)\n  x+=1");

map_eng.set('17', " ** Program correctly translated **");
map_eng.set('18', "ERROR, missing ''' to close comment!!");
map_eng.set('19', "CARE!! Robot collided with spiked obstacle...");
map_eng.set('20', "Robot fell into the emptiness :( , try again!!!");
map_eng.set('21', "Congratulations, you have completed the level!!");
map_eng.set('22', "ERROR. You can't use instruction repeat() inside another repeat()");
map_eng.set('23', "ERROR. Instruction ");
map_eng.set('24', " not found...");
map_eng.set('25', "ERROR in parenthesis, the correct way is: instruction(parameter).\nFor example: forward(5)");
map_eng.set('26', "ERROR. You haven't written any input parameter.");
map_eng.set('27', "ERROR. Structures must end with character ':'\nFor example: repeat(6):");
map_eng.set('28', "ERROR. Loops with repeat(x) can't be created inside conditional structures.");
map_eng.set('29', "ERROR. Conditional structures can't be created inside other conditionals.\nTo create other conditions, write them in new lines.");
map_eng.set('30', "ERROR. Conditional structures can't be created inside repeat(x).");
map_eng.set('31', "You can't reduce the level any more!!!");
map_eng.set('32', "You can't increase the level any more!!");
map_eng.set('49', "north_robot");
map_eng.set('50', "south_robot");
map_eng.set('51', "east_robot");
map_eng.set('52', "west_robot");
map_eng.set('71', "Condition NOT found...\nAvailable conditions: north_robot, south_robot, east_robot, west_robot");
map_eng.set('72', "ERROR. Wrong structure.");
map_eng.set('78', "Congratulations, you have completed the level!!\nYour solution is not the most efficient. Try again by using less instructions or by using smaller parameters!!",);
map_eng.set('79', "Congratulations, you have completed the level!!\nYou also found the most efficient solution. Good job!!");
map_eng.set('80', "ERROR. Testcases must finish with the instruction assert(state).");
map_eng.set('81', "ERROR. Testcase identifier ");
map_eng.set('82', " already exists.");
map_eng.set('83', "  assert(not_forwards)"); 
map_eng.set('84', "  assert(stabbed)");
map_eng.set('85', "  assert(collides)");
map_eng.set('86', "  assert(not_falls)");
map_eng.set('87', "ERROR. Inside a testcase structure, instructions must respect Python identation!!");
map_eng.set('88', "ERROR. Loops are not allowed inside a testcase structure!!");
map_eng.set('89', "ERROR. Conditionals are not allowed inside a testcase structure!!");
map_eng.set('90', "ERROR. You can't combine testcases!! First, close this one, and then create another.");
map_eng.set('95', "ERROR. Instruction assert() must respect Python identation!!");
map_eng.set('97', "ERROR. Oracle NOT found. Available oracles: not_forwards, stabbed, collides, not_falls");
map_eng.set('106', "ERROR. Parameter type is wrong. Forward, turn and repeat need a number; if and assert need a text string");

// VALENCIANO
let map_vlc = new Map();
map_vlc.set('titulo', "Joc sencill per a introducirse a la programació amb Python");
map_vlc.set('btnTraducir', "Traduir a robot");
map_vlc.set('btnEjecutar', "Executar programa");
map_vlc.set('btnNivelMenos', "Reduir Nivell");
map_vlc.set('btnNivelMas', "Aumentar Nivell");
map_vlc.set('nivel1', "''' NIVELL 1\nEste joc té un objectiu: Aconseguir que el robot arribe al final del nivell.\n\nPer a aconseguir-ho, hem d´ordenar al personatge que faça certs moviments -> Estos moviments són les instruccions del programa, que han de ser escrites en este panell. Estes instruccions han d´estar escrites en llenguatge Python, i es traduiran a un llenguatge que el robot entenga per a carregar-les i que s´executen.\n\nEn cada nivell es presentarà un repte diferent per a aprendre les regles del joc pas a pas. Veurem diferents obstacles que es tracten de manera diferent.\nEste primer nivell és el més senzill, prova a executar la instrucció...\n'''\n\navanza(4)");
map_vlc.set('nivel2', "''' NIVELL 2\nJa hem vist el funcionament del joc i de la instrucció avança (x), on x és el nombre de caselles que avança el robot.\nEste segon nivell ja és un poc més difícil. Ara necessitem un poc més. Prova a executar la seqüència que es veu...\n\n- El robot gira en sentit de les agulles del rellotge amb la instrucció gira (-x).\n- El robot gira en sentit contrari de les agulles del rellotge amb la instrucció gira (x).\n'''\n\navanza(5)\ngira(-1)");
map_vlc.set('nivel3', "''' NIVELL 3\nIntroduïm ara un nou obstacle amb punxes. És més xicotet però més perillós!! . Executa per a veure què passa si xoques amb ell...\n'''\n\navanza(6)");
map_vlc.set('nivel4', "''' NIVELL 4\nEste nivell és més complex perquè la primera fila d´obstacles és aleatòria, per la qual cosa la solució del nivell és diferent cada vegada.\n'''\n\ngira(-1)\navanza(2)\ngira(1)");
map_vlc.set('nivel5', "''' NIVELL 5\nEl nivell 5 és una variant del nivell 4. Hi ha un obstacle aleatori que varia la seua posició. Vés en compte amb ell i superaràs el nivell!!\n'''\n\navanza(5)");
map_vlc.set('nivel6', "''' NIVELL 6\nVés en compte amb este nivell, amb només un moviment erroni pots acabar dins d´un carreró sense eixida!!\n'''\n\navanza(5)");
map_vlc.set('nivel7', "''' NIVELL 7\nEn este nivell s´introduïxen les repeticions de moviments (bucles). Per a evitar escriure molt text, es poden crear repeticions.\nProva a executar el codi que t´oferim, i observa amb deteniment els espais que es deixen abans de les instruccions dins de la repetició.\nULL: Si no deixes 2 espais ESTRICTAMENT, no es va a repetir el que poses davall del repite(x):\n'''\n\nrepite(4):\n  avanza(2)\n  gira(1)");
map_vlc.set('nivel8', "''' NIVELL 8\nEste nivell és completament aleatori, i hi ha només un espai pel qual es pot passar, així que veu amb molt atenció per a superar este nivell.\nÉs recomanable intentar superar este nivell més d´una vegada per a provar les diferents solucions possibles.\n'''\n\navanza(6)\ngira(-1)");
map_vlc.set('nivel9', "''' NIVELL 9\nEl joc ja està complicant-se prou. Este nivell és aleatori també, però introduirem una nova estructura: CONDICIONAL.\nEls condicional es basen en la certesa d´una condició per a executar certes instruccions. En cas de no complir-se la condició, no es van a executar.\nPISTA: Les condicions que el robot entén depenen de la seua orientació en el tauler: robot_sur, robot_este, robot_norte i robot_oeste. Per a ajudar-te més, el robot ara mateix mira cap al Nord, i els botons de Reduir Nivell y Aumentar Nivell es troben a l´Est del robot. Amb açò, ja deus de poder usar els condicional!!\n\nIMPORTANT: Molta atenció amb els espais, ja que succeïx igual que en el cas del repite(x):\n'''\n\nsi(robot_norte):\n  avanza(1)\n  gira(-1)\nsi(robot_oeste):\n  gira(1)\n  avanza(2)\n  gira(-1)");
map_vlc.set('nivel10', "''' NIVELL 10\nEns acostem al final del joc. Els nivells 11 i 12, com podràs veure, s´han dissenyat per a ensenyar l´últim concepte del joc.\nEl nivell 10 no aporta res de nou, però és un dels nivells més difícil de superar!!\nÉs un nivell completament aleatori, excepte l´última fila de totes, que si haguera sigut també aleatòria podria tancar l´accés a la plataforma final i el nivell seria impossible de superar.\n'''\n\navanza(9)");
map_vlc.set('nivel11', "''' NIVELL 11\nEn este nivell 11, quasi acabant el joc, s´introduïx el concepte de testing de codi. El testing és una ferramenta molt usada per a validar el codi per mitjà de casos de prova sobre l´estat del programa després d´una sèrie d´esdeveniments que modifiquen l´estat.\n\nFUNCIONAMENT: L´estructura que s´ha de seguir la pots veure baix. Cal donar un identificador als casos de prova per a poder veure el resultat. El format de l´identificador té que ser testcase i un número sense espais (tal com es veu baix.\nDesprés cal introduir una sèrie d´instruccions que modificaran l´estat del programa. Finalment, escriure l´oracle, que és l´estat que volem comprovar després de l´execució de les instruccions.\nORACLE: La instrucció afirma (estat) és la que fixa l´oracle. Els estats possibles són no_avanza (verificar que el robot ha col·lidit amb un obstacle llis), punxa (verificar que el robot ha col·lidit amb un obstacle de punxes), xoca (verificar que el robot ha arribat als límits del tauler) i no_cae (verificar que el robot no cau al buit).\n'''\n\ntestcase1:  #Este és l´identificador\n  avanza(4)  #Esta és la seqüència d´instruccions\n  afirma(pincha)  #Açò és l´Oracle");
map_vlc.set('nivel12', "''' NIVELL 12\nAmb este nivell s´acaba el joc. És el nivell més difícil de solucionar, per la qual cosa superar este nivell és passar-se el joc.\nProva a fer alguns casos de prova abans de solucionar el nivell!\n'''\n\ntestcase1:\n  gira(-1)\n  avanza(3)\n  afirma(pincha)");
map_vlc.set('nivel13',"''' NIVEL 13\nInstrucció while....\n'''\n\nmientras(x<3):\n  avanza(2)\n  gira(1)");

map_vlc.set('17', " ** Programa traduït correctament **");
map_vlc.set('18', "Error, falta ''' per a tancar el comentari!!");
map_vlc.set('19', "ATENCIÓ!! El robot s'ha xocat amb les punxes...");
map_vlc.set('20', "El robot ha caigut al buit :( torna a intentar-ho!!!");
map_vlc.set('21', "Enhorabona, has superat el nivell!!");
map_vlc.set('22', "ERROR. No es pot fer un repite() dins d'un altre repite()");
map_vlc.set('23', "ERROR. La instrucció ");
map_vlc.set('24', " no existix...");
map_vlc.set('25', "ERROR amb els parèntesis, l'estructura és: instrucció (paràmetre).\nPer exemple: avanza(5)");
map_vlc.set('26', "ERROR. No has posat paràmetre d'entrada.");
map_vlc.set('27', "ERROR. Les estructures han d'acabar amb el caràcter ':'\nPer exemple: repite(6):");
map_vlc.set('28', "ERROR. No es pot iniciar un bucle amb repite(x) dins d'un condicional.");
map_vlc.set('29', "ERROR. No es pot iniciar un condicional dins d'un altre condicional.\nPer a crear més condicions, fes-ho en una altra línia.");
map_vlc.set('30', "ERROR. No es poden crear condicions dins d'un repite(x).");
map_vlc.set('31', "No es pot decrementar més el nivell!!");
map_vlc.set('32', "No es pot aumentar més el nivell!!");
map_vlc.set('49', "robot_norte");
map_vlc.set('50', "robot_sur");
map_vlc.set('51', "robot_este");
map_vlc.set('52', "robot_oeste");
map_vlc.set('71', "Condició NO existent...\nCondicions: robot_norte, robot_sur, robot_este, robot_oeste");
map_vlc.set('72', "ERROR. Estructura errònia.");
map_vlc.set('78', "Enhorabona, has superat el nivell!!\nLa solució no és la més eficient. Intenta superar el nivell amb menys instruccions o amb paràmetres més xicotets!!");
map_vlc.set('79', "Enhorabona, has superat el nivell!!\nA més, has trobat la solució més eficient. Molt bé!!");
map_vlc.set('80', "ERROR. Els testcases han d'acabar amb la instrucció afirma(estado).");
map_vlc.set('81', "ERROR. L'identificador ");
map_vlc.set('82', " ja existix.");
map_vlc.set('83', "  afirma(no_avanza)"); 
map_vlc.set('84', "  afirma(pincha)");
map_vlc.set('85', "  afirma(choca)");
map_vlc.set('86', "  afirma(no_cae)");
map_vlc.set('87', "ERROR. Les instruccions dins de l'estructura testcase han de respectar la identació de Python.");
map_vlc.set('88', "ERROR. No pot haver-hi bucles dins d'una estructura testcase!!");
map_vlc.set('89', "ERROR. No pot haver-hi condicional dins d'una estructura testcase!!");
map_vlc.set('90', "ERROR. No es poden combinar testcases!! Acaba este i després inicia un altre.");
map_vlc.set('95', "ERROR. La instrucció afirma() ha de respectar la identació de Python!!");
map_vlc.set('97', "ERROR. Oracle no existent. Oracles disponibles: no_avanza, pincha, choca, no_cae");
map_vlc.set('106', "ERROR. El tipus del paràmetre és erroni. Les instruccions avança, gira i repetix reben un número; les instruccions si i afirma reben cadenes de text");