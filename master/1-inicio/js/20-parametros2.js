'use strict'

// Funciones
function listado(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: "+ fruta1);
    console.log("Fruta 2: "+ fruta2);
    console.log(resto_de_frutas);
}
listado("Naranja", "Manzana", "Sandía", "pera", "melocotón");
var frutas = ["Kiwi", "Mango"];
listado(...frutas, "Naranja", "Manzana", "Sandía", "pera", "melocotón");