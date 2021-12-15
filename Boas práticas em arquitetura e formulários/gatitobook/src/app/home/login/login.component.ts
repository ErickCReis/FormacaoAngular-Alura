import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: () => {
        this.route.navigate(['animais']);
        console.log('Usuário autenticado com sucesso')
      },
      error: (erro) => {
        alert('Falha ao autenticar usuário');
        console.error(erro);
      },
    });
  }
}
