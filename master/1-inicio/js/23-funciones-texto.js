'use strict'

// Transformación de textos

var numero = 444;
var texto1 = "Bienvenido al Curso de JavaScript, curso de Víctor Robles";
var texto2 = "es muy buen curso";

var busqueda = texto1.split(" ");
var lastsearch = texto1.lastIndexOf("curso");
var subcadena = texto1.substring(14, 19);
console.log(busqueda);
console.log(texto1.charAt(14));
console.log(subcadena);
console.log("La última coincidencia es: "+ lastsearch);