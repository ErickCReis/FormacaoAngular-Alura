import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  tranferir() {
    console.log('Solicitada nova tranferencia');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('/extrato');
      },
      error: (error) => console.error(error),
    });
  }
}
