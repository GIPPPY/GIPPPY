const cambio_nivel = require('./cambioNivel');
const aumentar = 1;
const decrementar = 0;

test('Se espera que devuelva -1 porque estamos en un nivel por debajo del número de niveles diseñado', () => {
    const nivel_actual = -2;
    expect(cambio_nivel(nivel_actual, aumentar)).toBe(-1);
});

test('Va a devolver -1 porque estamos en un nivel por encima del número de niveles que se han diseñado', ()  => {
    const nivel_actual = 13;
    expect(cambio_nivel(nivel_actual, decrementar)).toBe(-1);
});

test('Se espera que devuelva -1 al intentar decrementar de nivel estando en el primero', () => {
    const nivel_actual = 1;
    expect(cambio_nivel(nivel_actual, decrementar)).toBe(-1);
});

test('Va a devolver 3 porque estamos en el nivel 4 y se ha solicitado un decremento de nivel', ()  => {
    const nivel_actual = 4;
    expect(cambio_nivel(nivel_actual, decrementar)).toBe(3);
});

test('Va a devolver 9 porque estamos en el nivel 8 y se ha solicitado un aumento de nivel', ()  => {
    const nivel_actual = 8;
    expect(cambio_nivel(nivel_actual, aumentar)).toBe(9);
});

test('Va a devolver -1 porque estamos en el nivel 12, que es el último, y se ha solicitado un aumento de nivel', ()  => {
    const nivel_actual = 12;
    expect(cambio_nivel(nivel_actual, aumentar)).toBe(-1);
});