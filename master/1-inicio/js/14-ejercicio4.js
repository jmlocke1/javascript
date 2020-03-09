"use strict"

// Mostrar todos los números impares que hay entre dos números introducidos por el usuario
do{
    var n1 = parseInt(prompt("Introduce el primer número"));
    var n2 = parseInt(prompt("Introduce el segundo número"));
}while(Number.isNaN(n1) || Number.isNaN(n2));

function impares(min, max){
    for(let i = min + 1; i < max; i++){
        if(i % 2 != 0){
            document.write(i + ", ");
        }
    }
}
if(n1 < n2){
    impares(n1, n2);
}else{
    impares(n2, n1);
}