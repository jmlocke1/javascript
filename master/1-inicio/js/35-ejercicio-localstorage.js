'use strict'

// Ejercicio Localstorage
var boton = document.querySelector("button");
//localStorage.setItem("indice", 1);
boton.addEventListener('click', function(){
    var indice = parseInt(localStorage.getItem("indice"));
    if(isNaN(indice)){
        indice = 1;
    }
    var pelicula = document.querySelector("#addpelicula").value.trim();
    if(pelicula.length >=1){
        localStorage.setItem("pelicula_"+indice, pelicula);
        indice++;
        localStorage.setItem("indice", indice);
    }
    
});

var total = new Array();
var lista = document.querySelector("#peliculas-list");
for(let i in localStorage){
    if(typeof localStorage[i] == "string" && i !== "indice"){
        total[i] = localStorage[i];
        var li = document.createElement("li");
        li.append(localStorage[i]);
        lista.append(li);
    }
}

// Creamos el select
var select = document.getElementById("borrarPelicula");
console.log(select);
var theOptions = "";
for(let i in total){
    /*
    let opt = document.createElement("option");
    opt.value = i;
    opt.innerHTML = total[i];
    select.appendChild(opt);
    */
    theOptions += `<option value="${i}">${total[i]}</option>`
}
select.innerHTML = theOptions;
var borrar = document.querySelector("#formBorrarPeliculas");
borrar.addEventListener('submit', function(){
    let indiceSeleccionado = select.selectedIndex;
    localStorage.removeItem(select[indiceSeleccionado].value);
});