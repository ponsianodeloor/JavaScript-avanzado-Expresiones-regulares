//^ Inicio
//$ Fin
var expresionInicio = /^Any/; //buscar al inicio la Palabra Any
console.log(expresionInicio.test('Any app than can be imagined man be made in JavaScript'));

var expresionFin = /JavaScript$/;
console.log(expresionFin.test('Any app than can be imagined man be made in JavaScript'));

var expresionInicioFin = /^Any|JavaScript$/;
console.log(expresionInicioFin.test('Ani app than can be imagined man be made in JavaZcript'));
