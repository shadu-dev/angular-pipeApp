import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // i18nSelect
  nombre:string = 'Eduardo';
  genero:string = 'masculino';
  
  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }
  
  // i18nPlural
  clientes:string[] = ['Maria', 'Pedro', 'Eduardo', 'Fernando', 'Juan', 'Eduardo', 'Fabricio'];
  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos 1 cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  cambiarCliente(genero:string){
    if( genero === 'masculino' ) {
      this.nombre = 'Carolina';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Eduardo';
      this.genero = 'masculino';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });
}
