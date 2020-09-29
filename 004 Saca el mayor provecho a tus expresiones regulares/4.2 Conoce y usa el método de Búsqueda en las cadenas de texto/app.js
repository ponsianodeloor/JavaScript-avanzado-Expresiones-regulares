var mensaje = "la historia continuara...";

// \W cualquier caracter que no sea alfanumerico
// \S cualquier caracter que no sea un espacio en blanco

//encontrara la posicion l = 0, a = 1, espacio = 2
console.log(mensaje.search(/\W/));

var mensaje = "   la historia continuara...";
//encontrara la espacio 3
console.log(mensaje.search(/\S/));
