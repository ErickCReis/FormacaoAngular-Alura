import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  retornaToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  salvatoken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  exluitoken(): void {
    localStorage.removeItem(KEY);
  }

  possuiToken(): boolean {
    return !!this.retornaToken();
  }
}
