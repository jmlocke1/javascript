// Interface
interface CamisetaBase{
    setColor(color:string):CamisetaBase;
    getColor():string;
}

// Decorador
function estampar(logo:string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}
// Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
    // Propiedades (características del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    
    constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // Métodos (funciones o acciones del objeto)
    public getColor():string{
        return this.color;
    }

    public setColor(color: string):Camiseta{
        this.color = color;
        return this;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(modelo: string):Camiseta{
        this.modelo = modelo;
        return this;
    }

    public getTalla():string{
        return this.talla;
    }

    public setTalla(talla: string):Camiseta{
        this.talla = talla;
        return this;
    }

    public getPrecio():number{
        return this.precio;
    }

    public setPrecio(precio: number):Camiseta{
        this.precio = precio;
        return this;
    }

}

// Clase hija
class Sudadera extends Camiseta{
    private capucha: boolean;
    
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number, capucha:boolean){
        super(color, modelo, marca, talla, precio);
        this.capucha = capucha;
    }
     
    

    setCapucha(capucha: boolean):Sudadera{
        this.capucha = capucha;
        return this;
    }

    public getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("Rojo", "Polo", "Nike", "l", 25);
console.log(camiseta);
camiseta.estampacion();
var sudadera = new Sudadera("Verde", "Victoria", "Elle", "l", 23.5, true);
console.log (sudadera);
sudadera.setCapucha(false)
.setColor("Morado")
.setModelo("Patricia");
console.log("La nueva sudadera es de color "+sudadera.getColor()+" modelo "+sudadera.getModelo());