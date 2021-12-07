import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  valor: number;
  destino: number;

  tranferir() {
    console.log('Solicitada nova tranferencia');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}
