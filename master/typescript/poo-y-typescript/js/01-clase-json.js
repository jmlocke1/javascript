var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60 km',
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color;
        console.log(this);
    },
    cambiaModelo: function(nuevo_modelo){
        this.modelo = nuevo_modelo;
        console.log(this);
    }
};
console.log(bicicleta);