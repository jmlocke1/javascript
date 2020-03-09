'use strict'

// Programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales

var num1, num2;
do {
    num1 = prompt("Introduce el primer número");
} while (Number.isInteger(num1));
do {
    num2 = prompt("Introduce el segundo número");
} while (!Number.isInteger(num2));

if (num1 > num2) {
    document.write("El primer número es " + num1 + ", y es mayor que el segundo, " + num2);
} else if (num1 < num2) {
    document.write("El segundo número es " + num2 + ", y es mayor que el primero, " + num1);
} else if (num1 == num2) {
    document.write('Los dos números son iguales');
} else {
    document.write('No es un número válido');
}