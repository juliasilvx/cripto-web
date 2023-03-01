import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Moeda } from 'src/app/models/moeda';

@Injectable({
  providedIn: 'root'
})
export class DetalheService {

  constructor(private requisicaoApi: HttpClient) { }

  obterMoedaDetalhe(id: number): Observable<Moeda> {
    return this.requisicaoApi.get<Moeda>(`/api/obter-moeda/peloId?id=${id}`);
  }

}


