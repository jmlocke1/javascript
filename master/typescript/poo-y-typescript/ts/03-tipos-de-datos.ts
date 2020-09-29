// Tipo de dato personalizado
type letrasonumeros = string | number;
// String
let cadena: string = "José Miguel Izquierdo";
// number
let numero: number = 12;
// Booleano
let verdadero_falso: boolean = true;
// Any
let cualquiera: any = "Hola";
cualquiera = 77;
// Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
let years: number[] | string[] | boolean[] = [12, 13, 14];
years = ["manzana", "pera", "pepe"];
years = [true, false];
// Múltiples tipos de datos en Arrays
let cadena2: string  | number= "José Miguel Izquierdo";
cadena2 = 12;
// Dato personalizado
let cosa1: letrasonumeros = "Dato personalizado 1";
cosa1 = 235.6;
let cosa2: letrasonumeros[] = ["Hola", 25, "María", 3, "de la O"];
let cosa3: any[] = ["Hola", 25, "María", 3, "de la O"];

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, cadena2, cosa1, cosa2);
//Let vs Var vs Const
var numero1 = 10;
var numero2 = 20;
const numero3 = 30;
    
if(numero1 == 10){
    let numero1 = 11;
    var numero2 = 33;
    const numero3 = 44;
    console.log(numero1, numero2, numero3);
    }
    
console.log(numero1, numero2, numero3);