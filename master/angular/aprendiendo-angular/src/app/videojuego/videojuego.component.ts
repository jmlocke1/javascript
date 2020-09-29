import {Component} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent {
    constructor(){
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }
}