var expresion = /p/g;

console.log(expresion.lastIndex);

expresion.lastIndex = 6;
var coincidencia = expresion.exec('sibr pdl sibr pdl');

console.log(coincidencia);
console.log(expresion.lastIndex);

var expresion_2 = /\d/g;
console.log(expresion_2.exec('Pedi 4 tacos y 1 agua'));
console.log(expresion_2.exec('Pedi 4 tacos y 1 agua'));
console.log(expresion_2.exec('Pedi 4 tacos y 1 agua'));
