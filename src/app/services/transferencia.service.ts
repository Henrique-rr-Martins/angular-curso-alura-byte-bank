import {HttpClient} from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Transferencia } from "../models/transferencia.model";

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {

  private transferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transferencias = [];
  }

  public get getTransferencias(): any[]{
    return this.transferencias;
  }

  public buscarListaTransferencia(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  public add(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia)

    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any){
      transferencia.data = new Date();
  }
}
