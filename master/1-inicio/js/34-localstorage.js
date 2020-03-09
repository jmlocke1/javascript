'use strict'

// Localstorage

if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Localstorage no disponible");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony");

// Recuperar elemento
document.querySelector("#listado").innerHTML = localStorage.getItem("Titulo2");

// Guardar objeto en localstorage
var usuario = {
    nombre: "José Miguel",
    apellidos: "Izquierdo Martínez",
    email: "josemidaw@gmail.com",
    web: "lamateporqueeramia.com"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#listado").append("- Email: "+userjs.web+" Nombre: "+userjs.nombre);

localStorage.removeItem("usuario");
//localStorage.clear();