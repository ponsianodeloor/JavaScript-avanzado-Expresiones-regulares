var mensaje = "Llegaban por montones primero 10 despues 20 despues 35 y se iban duplicando hasta llegar a 1000";
var expresion = /\b(\d+)\b/g;

var match;

while(match = expresion.exec(mensaje)){
 console.log(match);
 console.log('Se encontró ', match[1], ' en ', match.index);
}
