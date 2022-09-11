"use strict"

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minuto = fecha.getMinutes();
var segundo = fecha.getSeconds();
var milisegundo = fecha.getMilliseconds();
var textoHora = `
    El año es: ${year}
    El mes es: ${mes + 1}
    El día es: ${dia}
    La hora es: ${hora}
    Minutos: ${minuto}
    Segundos: ${segundo}
    Milisegundos: ${milisegundo}
`;
var a= moment('2016-01-01');
console.log(textoHora);
console.log(Math.random()*10000);
document.querySelector("#fechas").innerText = textoHora;