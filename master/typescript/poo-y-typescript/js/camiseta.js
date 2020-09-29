"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Métodos (funciones o acciones del objeto)
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
        return this;
    };
    Camiseta.prototype.getTalla = function () {
        return this.talla;
    };
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla;
        return this;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
        return this;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
    ], Camiseta);
    return Camiseta;
}());
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(color, modelo, marca, talla, precio, capucha) {
        var _this = _super.call(this, color, modelo, marca, talla, precio) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
        return this;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("Rojo", "Polo", "Nike", "l", 25);
console.log(camiseta);
camiseta.estampacion();
var sudadera = new Sudadera("Verde", "Victoria", "Elle", "l", 23.5, true);
console.log(sudadera);
sudadera.setCapucha(false)
    .setColor("Morado")
    .setModelo("Patricia");
console.log("La nueva sudadera es de color " + sudadera.getColor() + " modelo " + sudadera.getModelo());
