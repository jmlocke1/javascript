'use strict'

// Funciones anónimas
// Es una función que no tiene nombre
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    let sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}
sumame(4,7, (dato) => {
    console.log("La suma es:", dato);
}, 
(dato) => {
    console.log("La suma por dos es:", (dato*2));
});
sumame(4,7, dato => {
    console.log("La suma ampliada es:", (dato+2));
}, 
dato => {
    console.log("La suma por dos ampliada es:", (dato*2+2));
});