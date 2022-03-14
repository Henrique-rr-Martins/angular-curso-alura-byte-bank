import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'byte-bank';
  transferencias: any[] = [];

  transferir(event): void {
    const transferencia = {...event, data: new Date()}
    this.transferencias.push(transferencia);
  }

  exibirModalErro = function (msg: string): void {
    console.log(msg);
  };
}
