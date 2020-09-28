var expresion = /\d+/;
console.log(expresion.test('1997'));
console.log(expresion.test());

var expresion_2 = /\d*/;
console.log(expresion_2.test());
console.log(expresion_2.test('2020'));
//repeticiones de un patron
// + que un patron se va a repetir 1 0 mas veces

// * que puede repetirse 1 o mas veces
//   y tambien acepta que no este presente
