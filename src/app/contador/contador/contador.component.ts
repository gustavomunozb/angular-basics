import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})
export class ContadorComponent{
    titulo: string= 'Contador App';
    valor: number = 10;
    base: number = 5;
  
    acumular(numero: number){
      this.valor += numero;
    }
}