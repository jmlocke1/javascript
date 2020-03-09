'use strict'

function intervalo(){
    var tiempo = setInterval(() => {
        console.log("Set interval ejecutado");
        var encabezado = document.querySelector("h1");
        var originalSize = encabezado.style.fontSize;
        console.log("Tamaño original "+originalSize);
        if(encabezado.style.color == "green"){
            encabezado.style.color = "red";
            console.log(originalSize);
        }else{
            encabezado.style.color = "green";
        }
    }, 500);
    return tiempo;
}
window.addEventListener('load', () =>{
    // Timers
    var tiempo = intervalo();

    var stop = document.querySelector('#stop');
    var start = document.querySelector('#start');
    start.addEventListener('click', function(){
        tiempo = intervalo();
    });
    stop.addEventListener('click', function(){
        clearInterval(tiempo);
    })
});
