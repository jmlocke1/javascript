'use strict'

// BOM
function getBom(){
    console.log("Altura del navegador: "+window.innerHeight);
    console.log("Anchura del navegador: "+window.innerWidth);
    console.log("Altura externa del navegador: "+window.outerHeight);
    console.log("Anchura de la pantalla: "+ screen.width);
    console.log("Altura de la pantalla: "+ screen.height);
    console.log(window.location);
}
function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    var nuevaventana = window.open(url, "sub", "height=300,width=400");
    return nuevaventana;
}
getBom();