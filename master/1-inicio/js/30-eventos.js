'use strict'

// Eventos del ratón


function cambiarColor(){
    console.log("Me has dado click");
    console.log(boton.style.backgroundColor);
    //var pat = /green/i;
    /*if(boton.style.backgroundColor == "green"){
        boton.style.background = "red";
    }else {
        boton.style.background = "green";
    }*/
    boton.style.backgroundColor = nuevoColor;
    nuevoColor = colorAntiguo;
    colorAntiguo = boton.style.backgroundColor;
    console.log(boton.style.backgroundColor);
    return true;
}

var boton = document.querySelector("#boton");
var colorOriginal = boton.style.backgroundColor;
var colorAntiguo = "red";
var nuevoColor = "green";
boton.addEventListener('click', cambiarColor);
boton.addEventListener('mouseover', function(){
    boton.style.backgroundColor = "#ccc";
});
boton.addEventListener('mouseout', function(){
    boton.style.backgroundColor = colorOriginal;
});