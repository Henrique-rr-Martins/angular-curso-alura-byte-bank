import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'byte-bank';

  constructor(private transferenciaService: TransferenciaService){}

  transferir(transferencia): void {
    this.transferenciaService.add(transferencia);
  }

  exibirModalErro = function (msg: string): void {
    console.log(msg);
  };
}
