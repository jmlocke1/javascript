'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Supermán',
    year: 2017,
    pais: 'Estados Unidos'
};
var peliculas = [
    pelicula,
    {
        titulo: 'Batman forever',
        year: 2015,
        pais: 'Estados Unidos'
    },
    {
        titulo: 'El milagro de P. Tinto',
        year: 2009,
        pais: 'España'
    }
];

console.log(peliculas);
window.addEventListener('load', function() {
    var muestra = document.querySelector("#listado");
    var lista = document.createElement("ol");
    for(pelicula of peliculas){
        var pel = `
        <p>Título: ${pelicula.titulo}</p>
        <p>Año publicación: ${pelicula.year}</p>
        <p>País: ${pelicula.pais}</p>
`;
        var fila = document.createElement("li");
        fila.innerHTML = pel;
        lista.append(fila);
    }
    muestra.append(lista);
});
