/**
 * [expresion cada \d significa un numero ver en la tabla]
 * @type {RegExp}
 */
var expresion = /\d\d-\d\d-\d\d\d\d/;
console.log(expresion.test('19-10-1989'));
console.log(expresion.test('19-octubre-1989'));
//29-06-2007
