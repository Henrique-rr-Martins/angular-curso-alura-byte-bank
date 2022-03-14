import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  /**
   * metadado responsável por extrair e enviar os dados para quem invocou
   * necessário usar @output e iniciar o construtor EventEmitter()
   * você pode tipar esse cosntrutor como no exemplo abaixo
   */
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number = 0;
  destino: number = 0;

  transferir(): void {
    if (this.isValid()) {
      const transferencia = { valor: this.valor, destino: this.destino };

      /**
       * usado para iniciar a emissão do evento
       * necessário passar o valor como parametro
       */
      this.aoTransferir.emit(transferencia);
      this.limparCampos();
    }
  }

  limparCampos(): void {
    this.valor = null;
    this.destino = null;
  }

  private isValid() {
    const valido = this.valor > 0;
    if (!valido){
      this.valoresComErro.emit('Informe um valor válido');
      return false;
    }

    return valido;
  }
}
