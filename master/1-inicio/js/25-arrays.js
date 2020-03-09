'use strict'

// Arrays, vectores, matrices

var nombre = ["José", "Miguel", "Izquierdo"];
// En forma de objeto
var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "Pascal");
/*
var elemento = prompt("¿Qué elemento del array quieres? El array tiene "+ lenguajes.length+" elementos");
if(elemento >= lenguajes.length || elemento < 0){
    alert("Introduce el número correcto menor que "+lenguajes.length);
}else {
    console.log(lenguajes[elemento]);
}
*/
document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, index, data)=>{
    document.write("<li>"+index+" - "+elemento+"</li>");
});
document.write("</ul>");
document.write("<ul>");
for(let index in lenguajes){
    document.write("<li>"+lenguajes[index]+"</li>");
}
document.write("</ul>");

// Búsquedas
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");
console.log(busqueda);
var precios = [10, 20, 50, 80, 12];
busqueda = precios.some(precio => precio > 80);
console.log(busqueda);