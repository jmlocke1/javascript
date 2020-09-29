/* 
 * Autor: José Miguel Izquierdo Martínez
 * D.N.I.: 19.101.635
 * Módulo: Desarrollo de aplicaciones web en entorno cliente
 * Grado en Desarrollo de aplicaciones web
 */


class Edificio
{
    /**
     * Constructor de la clase Edificio. Se inicializan las propiedades del objeto
     * con los valores pasados por los parámetros.
     * 
     * @param {type} calle
     * @param {type} numero
     * @param {type} codPostal
     * @returns {Edificio}
     */
    constructor (calle, numero, codPostal)
    {
        this.calle = calle;
        this.numero = numero;
        this.codPostal = codPostal;
        this.planta = new Array();
        document.write("Construido nuevo edificio en calle " + calle + ", nº: " + numero + ", C.P.: "+ codPostal+"<br>");
    }
    
    /**
     * Método que agrega el número de plantas y puertas indicadas en los parámetros
     * a las ya existentes en el edificio. Si no se indica alguno de los parámetros,
     * se entiende que se deja igual. 
     * Si se pasa un valor negativo no afecta
     * al valor del campo, se queda igual. Si se pasa un valor excesivamente 
     * alto... bueno, ¿quién es el programa para cuestionarlo? Es factible hacer 
     * un rascacielos o un edificio con 200 puertas con plantas, eso ya es 
     * responsabilidad del arquitecto.
     * 
     * @param {Integer} numPlantas
     * @param {Integer} puertas
     * @returns void
     */
    agregarPlantasYPuertas(numPlantas = 0, puertas = 0)
    {
        var plantasActuales = this.planta.length;
        
        if(plantasActuales === 0 && numPlantas === 0){
            document.write("Aún no hay ninguna planta, no puede añadir puertas");
        }else {
            // Si hemos entrado aquí, tenemos al menos una planta, o la vamos a tener
            var puertasEnPlanta = plantasActuales > 0 ? this.planta[0].length : 0;
            // Primero agregamos puertas a las plantas existentes
            for(var i = 0; i < plantasActuales; i++){
                // Si se ha pasado un valor negativo de puertas, no entra en el bucle
                for(var j = puertasEnPlanta; j < puertasEnPlanta + puertas; j++){
                    this.planta[i][j] = "";
                }
            }
            // Ahora añadimos las nuevas plantas.
            // Al igual que con las puertas, si se pasa un valor negativo no entra en el bucle
            for(var i = plantasActuales; i < plantasActuales + numPlantas; i++){
                this.planta[i] = new Array();
                for(var j = 0; j < puertasEnPlanta + puertas; j++){
                    this.planta[i][j] = "";
                }
            }
        }
        // Este mensaje de abajo se utiliza para chequeo del método. Se deja
        // comentado porque no se pide en el enunciado
        // document.write("El edificio ahora tiene "+this.planta.length+" plantas y "+this.planta[0].length+" puertas<br>");
    }
    
    /**
     * Método para modificar el número del edificio con el pasado por parámetro.
     * Si no se le pasa ningún parámetro, se deja el valor actual
     * 
     * @param {Integer} numero
     * @returns void
     */
    modificarNumero(numero = this.numero)
    {
        this.numero = numero;
    }
    
    /**
     * Método para modificar el nombre de la calle. Si no se le pasa ningún parámetro
     * se queda igual.
     * 
     * @param {String} calle
     * @returns {void}
     */
    modificarCalle(calle = this.calle)
    {
        this.calle = calle;
    }
    
    /**
     * Método para modificar el número del código postal. Si no se le pasa ningún 
     * parámetro se queda igual.
     * 
     * @param {Integer} codigo
     * @returns {void}
     */
    modificarCodigoPostal(codigo = this.codPostal)
    {
        this.codPostal = codigo;
    }
    
    /**
     * Devuelve la calle donde está ubicado el edificio
     * 
     * @returns {.calle|type|String|@var;calle}
     */
    imprimeCalle()
    {
        return this.calle;
    }
    
    /**
     * Devuelve el número del edificio
     * 
     * @returns {.numero|@var;numero|Integer|type}
     */
    imprimeNumero()
    {
        return this.numero;
    }
    
    /**
     * Devuelve el código postal de la zona donde está ubicado el edificio
     * 
     * @returns {Integer|type|@var;codigo|.codPostal}
     */
    imprimeCodigoPostal()
    {
        return this.codPostal;
    }
    
    /**
     * Método para agregar un propietario a su respectivo piso. 
     * Si se intenta añadir el propietario a una planta o puerta que no existe,
     * no se añadirá y mostrará un mensaje de error
     * 
     * @param {String} nombre   Nombre del propietario
     * @param {Integer} planta
     * @param {Integer} puerta
     * @returns {void}
     */
    agregarPropietario(nombre, planta, puerta)
    {
        var numPuertas = this.planta.length > 0 ? this.planta[0].length : 0;
        var habita = true;
        if(planta <= 0 || planta > this.planta.length){ // Comprobamos la planta
            document.write("La planta indicada no existe en este edificio<br>");
            habita = false;
        } 
        if(puerta <= 0 || puerta > numPuertas){   // Comprobamos la puerta
            document.write("La puerta indicada no existe en este edificio<br>");
            habita = false;
        }
        if(habita) { // Está todo correcto, el nuevo inquilino puede ocupar su piso
            this.planta[planta - 1][puerta - 1] = nombre;
            document.write(nombre+" es ahora el propietario de la puerta "+puerta+" de la planta "+planta+"<br>");
        }else {
            document.write("El nuevo inquilino no puede ocupar su piso, comprueba los datos introducidos.<br>");
        }
    }
    
    /**
     * Método que recorre el edificio listando todos los propietarios de cada puerta
     * 
     * @returns {void}
     */
    imprimePlantas()
    {
        for(var i=0, planta=1; i < this.planta.length; i++, planta++){
            for(var j=0, puerta = 1; j < this.planta[i].length; j++, puerta++){
                document.write("Propietario del piso "+puerta+" de la planta "+planta+": "+ this.planta[i][j]+"<br>");
            }
        }
    }
}
