'use strict'

// Tabla de multiplicar de un número introducido por pantalla

do{
    var num = parseInt(prompt("Introduce un número para calcular su tabla de multiplicar"));
}while(Number.isNaN(num));
document.write("<h1>Tabla del "+num+"</h1>")
for(let i = 1; i <= 10; i++){
    document.write(num + " x "+ i + " = " + (num * i) + "<br>");
}