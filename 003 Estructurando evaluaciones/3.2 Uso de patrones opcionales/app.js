var expresion =/pollo|res|pescado/;

console.log(expresion);

console.log(expresion.test('El cliente pidio pollo'));
console.log(expresion.test('El cliente pidio res'));
console.log(expresion.test('El cliente pidio pescado'));
console.log(expresion.test('El cliente pidio tacos'));
