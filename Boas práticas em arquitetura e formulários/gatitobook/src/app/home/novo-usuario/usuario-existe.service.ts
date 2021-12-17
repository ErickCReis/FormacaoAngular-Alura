import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { filter, first, map, switchMap } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        filter((nomeUsuario) => !!nomeUsuario),
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExistente) =>
          usuarioExistente ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
