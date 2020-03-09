'use strict'

// Programa que nos diga si un número es par o impar

do{
    var num = parseInt(prompt("Introduce un número"));
}while(Number.isNaN(num));
if(num%2==0){
    document.write("El número "+num+" introducido es par")
}else{
    document.write("El número "+num+" introducido es impar")
}