'use strict'

// Ejercicios Arrays

/*
1- Pida 6 números por pantalla y los meta en un array
2- Mostrar el array completo (todos sus elementos) en el cuerpo de la página y en la consola
3- Ordenar los elementos y mostrarlos 
4- Invertir su orden y mostrarlo
5- Mostrar cuantos elementos tiene el array
6- Búsqueda de un valor introducido por el usuario, que nos diga si está en el array y su posición
*/
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h3>Contenido del array "+textoCustom+"</h3>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}
document.write("<h1>Ejercicios de Arrays</h1>");
document.write("<h2>Ejercicio 1. Pedir 6 números por pantalla</h2>");
var numtotal = 6
var numeros = new Array();
for(let i = 0; i < numtotal; i++){
    numeros[i] = parseInt( prompt("Introduce un número para el array. Ya tenemos "+i+" elementos, necesitamos "+(numtotal-i)));
}
document.write("<h2>Ejercicio 2. Mostrar el array completo</h2>");
mostrarArray(numeros);
document.write("<h2>Ejercicio 3. Ordenar los elementos y mostrarlos</h2>");
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenado");
document.write("<h2>Ejercicio 4- Invertir su orden y mostrarlo</h2>");
// numeros.reverse(); Ya funciona, porque se ha ordenado bien en el paso anterior
// Vamos a ordenar en reverso
numeros.sort(function(a,b){return b - a});
mostrarArray(numeros, "Ordenados en reverso");
document.write("<h2>Ejercicio 5- Mostrar cuantos elementos tiene el array</h2>");
document.write("<p>El array tiene "+numeros.length+" elementos</p>")
document.write("<h2>Ejercicio 6- Búsqueda de un valor introducido por el usuario, que nos diga si está en el array y su posición</h2>");
var numabuscar = prompt("Introduzca un número para buscarlo en el array");
if(numeros.some(num => num == numabuscar)){
    var pos = numeros.findIndex(num => num == numabuscar);
    document.write("<p>El número existe, y ocupa la posición " + pos + "</p>");
}else{
    document.write("<p>El número no existe</p>");
}