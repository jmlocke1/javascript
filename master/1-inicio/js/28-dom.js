'use strict'

// DOM
function cambiaColor(color){
    caja.style.background = color;
}
// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";
caja.title = "Tengo una caja";
console.log(caja);

var todosLosDivs = document.getElementsByTagName('div');

var valor;
for(valor in todosLosDivs){
    if( typeof todosLosDivs[valor].textContent == "string"){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
};
document.querySelector("#miseccion").append(document.createElement("hr"));
//console.log(texto);
var divsrojos = document.getElementsByClassName('rojo');
var divsamarillos = document.getElementsByClassName('amarillo');
divsamarillos[0].style.background = "yellow";
for(let index in divsrojos){
    if(divsrojos[index].className == "rojo"){
        divsrojos[index].style.background = "red";
    }
    
}
for(let div of divsrojos){
    if(div.className == "rojo"){
        div.style.background = "pink";
    }
}


// Query Selector
var id = document.querySelectorAll("div.rojo");
console.log(id);