import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  tranferir() {
    console.log('Solicitada nova tranferencia');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
