/**
 * [expresion1 los [] sirven para comprobar si existe uno de estos caracteres]
 * @type {RegExp}
 */
var expresion1 = /[0123456789]/;
console.log(expresion1.test('Ocurrio en 1989'));

/**
 * [expresion2 busqueda por rangos]
 * @type {RegExp}
 */
var expresion2 = /[0-9a-zA-Z]/;
console.log(expresion1.test('Ocurrio en 1989'));
