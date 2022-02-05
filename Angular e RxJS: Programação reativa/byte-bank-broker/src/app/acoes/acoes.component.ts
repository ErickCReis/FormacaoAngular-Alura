import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Acoes } from './modelo/acoes';
import { AcoesService } from './acoes.service';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();

  todasAcoes$ = this.acoesService
    .getAcoes()
    .pipe(tap(() => console.log('Fluxo inicial')));
  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => console.log('Fluxo do filtro')),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );

  acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$);

  constructor(private acoesService: AcoesService) {}
}
