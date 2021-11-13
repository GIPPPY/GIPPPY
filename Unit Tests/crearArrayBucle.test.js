const crear_array_bucle = require('./crearArrayBucle');
var nrepeticiones;
const array_test3 = ["avanza(3)", "gira(1)"];
const array_test4 = ["avanza(10)"];
const array_test5 = ["gira(-3)", "gira(2)", "avanza(1)"];
const array_test6 = ["forward(12)", "turn(-4)"];


test('Test 1: Inputs -> Array vacío, nrepeticiones = 0 ', () => {
    nrepeticiones = 0; 
    expect(crear_array_bucle([], nrepeticiones)).toStrictEqual([]);
});

test('Test 2: Inputs: Array vacío, nrepeticiones > 0', () => {
    nrepeticiones = 5; 
    expect(crear_array_bucle([], nrepeticiones)).toStrictEqual([]);
});

test('Test 3: Inputs -> array_test3, nrepeticiones < 0 ', () => {
    nrepeticiones = -5; 
    expect(crear_array_bucle(array_test3, nrepeticiones)).toStrictEqual([]);
});

test('Test 4: Inputs -> array_test4, nrepeticiones > 0 ', () => {
    nrepeticiones = 3; 
    expect(crear_array_bucle(array_test4, nrepeticiones)).toStrictEqual(["avanza(10)", "avanza(10)", "avanza(10)"]);
});

test('Test 5: Inputs -> array_test5, nrepeticiones > 0 ', () => {
    nrepeticiones = 2; 
    expect(crear_array_bucle(array_test5, nrepeticiones)).toStrictEqual(["gira(-3)", "gira(2)", "avanza(1)", "gira(-3)", "gira(2)", "avanza(1)"]);
});

test('Test 6: Inputs -> array_test6 (en inglés), nrepeticiones > 0 ', () => {
    nrepeticiones = 3; 
    expect(crear_array_bucle(array_test6, nrepeticiones)).toStrictEqual(["forward(12)", "turn(-4)", "forward(12)", "turn(-4)", "forward(12)", "turn(-4)"]);
});