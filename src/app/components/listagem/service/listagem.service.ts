import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  constructor(private requisicaoApi: HttpClient) { }

  obterMoedas():Observable<Moeda[]> {
    return this.requisicaoApi.get<Moeda[]>('localhost:3000/api/cripto/obter-moeda');

  }



}
