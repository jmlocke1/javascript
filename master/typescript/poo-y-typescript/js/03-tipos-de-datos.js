"use strict";
// String
var cadena = "José Miguel Izquierdo";
// number
var numero = 12;
// Booleano
var verdadero_falso = true;
// Any
var cualquiera = "Hola";
cualquiera = 77;
// Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [12, 13, 14];
years = ["manzana", "pera", "pepe"];
years = [true, false];
// Múltiples tipos de datos en Arrays
var cadena2 = "José Miguel Izquierdo";
cadena2 = 12;
// Dato personalizado
var cosa1 = "Dato personalizado 1";
cosa1 = 235.6;
var cosa2 = ["Hola", 25, "María", 3, "de la O"];
var cosa3 = ["Hola", 25, "María", 3, "de la O"];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, cadena2, cosa1, cosa2);
//Let vs Var vs Const
var numero1 = 10;
var numero2 = 20;
var numero3 = 30;
if (numero1 == 10) {
    var numero1_1 = 11;
    var numero2 = 33;
    var numero3_1 = 44;
    console.log(numero1_1, numero2, numero3_1);
}
console.log(numero1, numero2, numero3);
