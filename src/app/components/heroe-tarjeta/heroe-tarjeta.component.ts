import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

@Input()  heroe: any = {};
@Input() index: number;

@Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter;
   }
  

  
  ngOnInit() {
  }

  verDetalle() {
    this.router.navigate(["/heroe", this.heroe.id]);
    // this.heroeSeleccionado.emit( this.index )  Para comprobar como funciona Output para pasar de padre a hijo.
  }

}
