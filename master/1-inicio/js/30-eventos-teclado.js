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

var colorAntiguo = "red";
var nuevoColor = "green";


window.addEventListener('load', () =>{
    var boton = document.querySelector("#boton");
    var colorOriginal = boton.style.backgroundColor;
    

    var input = document.querySelector("#campo_nombre");

    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = "10px solid black";
    });
    boton.addEventListener('mouseover', function(){
        boton.style.backgroundColor = "#ccc";
    });
    boton.addEventListener('mouseout', function(){
        boton.style.backgroundColor = colorOriginal;
    });
    // Focus
    input.addEventListener('focus', function(){
        console.log("Estás dentro del input");
    });
    // Blur
    input.addEventListener('blur', function(){
        console.log("Estás fuera del input");
    });
    // Keydown
    input.addEventListener('keydown', function(event){
        console.log("Has pulsado la tecla ",String.fromCharCode(event.keyCode));
    });
    // Keypress
    input.addEventListener('keypress', function(event){
        console.log("Tecla presionada ",String.fromCharCode(event.keyCode));
    });
    // Keyup
    input.addEventListener('keyup', function(event){
        console.log("Tecla soltada ",String.fromCharCode(event.keyCode));
    });
});
