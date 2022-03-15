import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private transferencias: any[];

  constructor() {
    this.transferencias = [];
  }

  public get getTransferencias(): any[]{
    return this.transferencias;
  }

  public add(transferencia: any): void{
    this.hidratar(transferencia)
    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: any){
      transferencia.data = new Date();
  }
}
