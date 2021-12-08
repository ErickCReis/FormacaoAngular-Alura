import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[] = [];

  transferir($event: any) {
    console.log($event);
    const tranferencia = {...$event, data: new Date()};
    this.transferencias.push(tranferencia);
  }
}
