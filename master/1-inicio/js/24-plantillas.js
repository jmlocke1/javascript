'use strict'

// Plantillas

var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");
// var texto = "Mi nombre es "+nombre+" Mis apellidos son: "+ apellidos;
var texto = `
    <h1>Hola qué tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(texto);