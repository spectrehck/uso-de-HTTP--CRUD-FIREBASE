import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Celular } from '../../interface/celular.interface';


@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styles: []
})
export class CelularComponent implements OnInit {

  // creando un objeto
  celular: Celular = {
marca: '',
nombre: '',
cantidad: 0 ,
precio: 0 ,
  };
  constructor() { }

  ngOnInit() {
  }
  guardar(){
    
  }

}
