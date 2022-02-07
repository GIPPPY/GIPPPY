/* Fichero para los maps con las expresiones necesarias para el juego en diferentes idiomas.
 */

// EXPRESIONES EN ESPAÑOL
let map_reg_esp = new Map();
map_reg_esp.set('avanza',/avanza\(\d+\)/);
map_reg_esp.set('avanza_identado',/  avanza\(\d+\)/);
map_reg_esp.set('gira_der',/gira\(\d+\)/);
map_reg_esp.set('gira_der_identado',/  gira\(\d+\)/);
map_reg_esp.set('gira_izq',/gira\(-\d+\)/);
map_reg_esp.set('gira_izq_identado',/  gira\(-\d+\)/);
map_reg_esp.set('repite',/repite\(\d+\):/);
map_reg_esp.set('repite_identado',/  repite\(\d+\):/);
map_reg_esp.set('si_robot_sur',/si\(robot_sur\):/);
map_reg_esp.set('si_robot_sur_identado',/  si\(robot_sur\):/);
map_reg_esp.set('si_robot_norte',/si\(robot_norte\):/);
map_reg_esp.set('si_robot_norte_identado',/  si\(robot_norte\):/);
map_reg_esp.set('si_robot_este',/si\(robot_este\):/);
map_reg_esp.set('si_robot_este_identado',/  si\(robot_este\):/);
map_reg_esp.set('si_robot_oeste',/si\(robot_oeste\):/);
map_reg_esp.set('si_robot_oeste_identado',/  si\(robot_oeste\):/);
map_reg_esp.set('testcase',/testcase\d+\:/);
map_reg_esp.set('testcase_identado',/  testcase\d+\:/);
map_reg_esp.set('afirma_no_avanza',/  afirma\(no_avanza\)/);
map_reg_esp.set('afirma_pincha',/  afirma\(pincha\)/);
map_reg_esp.set('afirma_choca',/  afirma\(choca\)/);
map_reg_esp.set('afirma_no_cae',/  afirma\(no_cae\)/);
map_reg_esp.set('mientras_no_choca',/mientras\(no_choca\):/);
map_reg_esp.set('mientras_no_choca_identado',/  mientras\(no_choca\):/);
/* REGEX ERRORES*/
map_reg_esp.set('error_avanza1',/avanza\d+\)/g);
map_reg_esp.set('error_avanza2',/avanza\(\d+/g);
map_reg_esp.set('error_avanza3',/avanza\(\)/);
map_reg_esp.set('error_gira1',/gira\d+\)/g);
map_reg_esp.set('error_gira2',/gira\(\d+/g);
map_reg_esp.set('error_gira3',/gira-\d+\)/g);
map_reg_esp.set('error_gira4',/gira\(-\d+/g);
map_reg_esp.set('error_gira5',/gira\(\)/);
map_reg_esp.set('error_repite',/repite\(\):/);
map_reg_esp.set('error_repite_puntos',/repite\(\d+\)/);
map_reg_esp.set('error_if',/si\(\):/);
map_reg_esp.set('error_if_puntos',/si\(\w+\)/);
map_reg_esp.set('error_nostruc_pos',/\w+\(\d+\)/);
map_reg_esp.set('error_nostruc_neg',/\w+\(-\d+\)/);
map_reg_esp.set('error_nostruc_str',/\si\(\w+\)/);
map_reg_esp.set('error_struc_num',/\w+\(\d+\):/);
map_reg_esp.set('error_struc_str',/\w+\(\w+\):/);
map_reg_esp.set('error_condicion',/si\(\w+\):/);
map_reg_esp.set('error_general',/\w+\(\)/);
map_reg_esp.set('error_assert_noident_1',/afirma\(no_avanza\)/);
map_reg_esp.set('error_assert_noident_2',/afirma\(pincha\)/);
map_reg_esp.set('error_assert_noident_3',/afirma\(choca\)/);
map_reg_esp.set('error_assert_noident_4',/afirma\(no_cae\)/);
map_reg_esp.set('error_oraculo',/  afirma\(\w+\)/);
map_reg_esp.set('error_testcase_puntos',/testcase\d+/);
map_reg_esp.set('error_tipo_avanza1',/avanza\(\w+\)/);
map_reg_esp.set('error_tipo_gira',/gira\(\w+\)/);
map_reg_esp.set('error_tipo_repite',/repite\(\w+\):/);
map_reg_esp.set('error_tipo_si',/si\(\d+\):/);
map_reg_esp.set('error_tipo_afirma',/afirma\(\d+\)/);

// EXPRESIONES EN INGLES
let map_reg_eng = new Map();
map_reg_eng.set('avanza',/forward\(\d+\)/);
map_reg_eng.set('avanza_identado',/  forward\(\d+\)/);
map_reg_eng.set('gira+',/turn\(\d+\)/);
map_reg_eng.set('gira+_identado',/  turn\(\d+\)/);
map_reg_eng.set('gira-',/turn\(-\d+\)/);
map_reg_eng.set('gira-_identado',/  turn\(-\d+\)/);
map_reg_eng.set('repite',/repeat\(\d+\):/);
map_reg_eng.set('repite_identado',/  repeat\(\d+\):/);
map_reg_eng.set('si_robot_sur',/if\(south_robot\):/);
map_reg_eng.set('si_robot_sur_identado',/  if\(south_robot\):/);
map_reg_eng.set('si_robot_norte',/if\(north_robot\):/);
map_reg_eng.set('si_robot_norte_identado',/  if\(north_robot\):/);
map_reg_eng.set('si_robot_este',/if\(east_robot\):/);
map_reg_eng.set('si_robot_este_identado',/  if\(east_robot\):/);
map_reg_eng.set('si_robot_oeste',/if\(west_robot\):/);
map_reg_eng.set('si_robot_oeste_identado',/  if\(west_robot\):/);
map_reg_eng.set('testcase',/testcase\d+\:/);
map_reg_eng.set('testcase_identado',/  testcase\d+\:/);
map_reg_eng.set('afirma_no_avanza',/  assert\(not_forwards\)/);
map_reg_eng.set('afirma_pincha',/  assert\(stabbed\)/);
map_reg_eng.set('afirma_choca',/  assert\(collides\)/);
map_reg_eng.set('afirma_no_cae',/  assert\(not_falls\)/);
map_reg_eng.set('mientras_no_choca',			/while\(no_choca\):/);
map_reg_eng.set('mientras_no_choca_identado',	/  while\(no_choca\):/);
/* REGEX ERRORES*/
map_reg_eng.set('error_avanza1',/forward\d+\)/g);
map_reg_eng.set('error_avanza2',/forward\(\d+/g);
map_reg_eng.set('error_avanza3',/forward\(\)/);
map_reg_eng.set('error_gira1',/turn\d+\)/g);
map_reg_eng.set('error_gira2',/turn\(\d+/g);
map_reg_eng.set('error_gira3',/turn-\d+\)/g);
map_reg_eng.set('error_gira4',/turn\(-\d+/g);
map_reg_eng.set('error_gira5',/turn\(\)/);
map_reg_eng.set('error_repite',/repeat\(\):/);
map_reg_eng.set('error_repite_puntos',/repeat\(\d+\)/);
map_reg_eng.set('error_if',/if\(\):/);
map_reg_eng.set('error_if_puntos',/if\(\w+\)/);
map_reg_eng.set('error_nostruc_pos',/\w+\(\d+\)/);
map_reg_eng.set('error_nostruc_neg',/\w+\(-\d+\)/);
map_reg_eng.set('error_nostruc_str',/\if\(\w+\)/);
map_reg_eng.set('error_struc_num',/\w+\(\d+\):/);
map_reg_eng.set('error_struc_str',/\w+\(\w+\):/);
map_reg_eng.set('error_condicion',/if\(\w+\):/);
map_reg_eng.set('error_general',/\w+\(\)/);
map_reg_eng.set('error_assert_noident_1',/assert\(not_forwards\)/);
map_reg_eng.set('error_assert_noident_2',/assert\(stabbed\)/);
map_reg_eng.set('error_assert_noident_3',/assert\(collides\)/);
map_reg_eng.set('error_assert_noident_4',/assert\(not_falls\)/);
map_reg_eng.set('error_oraculo',/  assert\(\w+\)/);
map_reg_eng.set('error_testcase_puntos',/testcase\d+/);
map_reg_eng.set('error_tipo_avanza',/forward\(\w+\)/);
map_reg_eng.set('error_tipo_gira',/turn\(\w+\)/);
map_reg_eng.set('error_tipo_repite',/repeat\(\w+\):/);
map_reg_eng.set('error_tipo_si',/if\(\d+\):/);
map_reg_eng.set('error_tipo_afirma',/assert\(\d+\)/);
