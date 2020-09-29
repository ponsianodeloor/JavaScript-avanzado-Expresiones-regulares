/**
 * [expresion {1,2 el minimo y maximo digitos}]
 * 1 o 2 caracteres mientras para el año siempre serán 4
 * {2, } minimo 2 caracteres y maximo n caracteres
 * @type {[type]}
 */
var expresion = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;

console.log(expresion.test('19-10-1989 22:45'));
