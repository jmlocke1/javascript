'use strict'

// Arrays multidimensionales

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino', 'Batman'];
var cine = [categorias, peliculas];
peliculas.sort();
console.log(peliculas);

// console.log(cine[1][1]);
/*
var elemento;
while(elemento != "ACABAR"){
    elemento = prompt("Introduce tu película");
    peliculas.push(elemento);
}
peliculas.pop();

var indice = peliculas.indexOf("Gran Torino");
console.log(indice);
if(indice > -1){
    peliculas.splice(indice,1);
}
console.log(peliculas.join("- "));
*/
for each(var pelicula in peliculas){
    document.write(pelicula+"<br>");
}