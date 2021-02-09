"use strict";
//mistypedVar = "Hola Mundo";
// NaN = 42;
var obj = { 
    get x() { 
        return 17; 
    } 
};

var lost = {
    loc : "Island",
    get location (){
        return this.loc;
    },
    set location(val){
        this.loc = val;
    }
};

class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }

    get getAlto(){
        return this.alto;
    }

    // Getter
    get area() {
       return this.calcArea();
     }
    // Método
    calcArea () {
      return this.alto * this.ancho;
    }
  };
  
  const cuadrado = new Rectangulo(10, 10);
  
  console.log(cuadrado.area); // 100
  var foo = { bar : 1, bar : 2 };