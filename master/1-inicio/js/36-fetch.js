"use strict"

// Fetch y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_antonette = document.querySelector("#antonette");
var div_profesor = document.querySelector("#profesor");
var usuarios = [];
getUsuarios()
    .then(data => data.json())
    .then(users => {
        console.log(users);
        listadoUsuarios(users);
        // Una vez que tenga los usuarios
        return getInfo();
    })
    .then(data => {
        mostrarProfesor(data);
        console.log(data);
        return getAntonnette();
        
    })
    .then(data => data.json())
    .then(antonette => {
        mostrarAntonette(antonette);
    })
    .catch(error => {
        console.log(error);
        alert("Error en las peticiones");
    });

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function getAntonnette(){
    return fetch('https://jsonplaceholder.typicode.com/users/2');
}

function getInfo(){
    var profesor = {
        nombre: 'Víctor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    };
    return new Promise((resolve, reject) => {
        var profesorString = "";
        setTimeout(function(){
            profesorString = JSON.stringify(profesor);
            if(typeof profesorString != 'string' || profesorString == '') return reject('error 1');
            return resolve(profesorString);
        }, 3000);
    });
    
}
function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + "- Username: "+ user.username+" - Name: "+user.name;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarAntonette(user){
    let nombre = document.createElement('h4');
    nombre.innerHTML = "- Username: "+ user.username+" - Name: "+user.name;
    div_antonette.appendChild(nombre);
    document.querySelector("#antonette .loading").style.display = 'none';
}

function mostrarProfesor(user){
    let nombre = document.createElement('h4');
    user = JSON.parse(user);
    nombre.innerHTML = "Profesor: "+ user.nombre+" "+user.apellidos+" - WEB: "+ user.url;
    div_profesor.appendChild(nombre);
    document.querySelector("#profesor .loading").style.display = 'none';
}