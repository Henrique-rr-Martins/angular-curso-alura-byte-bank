import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number = 0;
  destino: number = 0;

  constructor(private transferenciaService: TransferenciaService, private router: Router){}

  public transferir(): void {
      const transferencia: Transferencia = { valor: this.valor, destino: this.destino };

      this.transferenciaService.add(transferencia).subscribe((resultado: Transferencia) => {
        console.log(resultado)
        this.router.navigateByUrl('extrato')
      },
      error => console.error(error));
  }
}
