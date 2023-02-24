import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moeda } from 'src/app/models/moeda';

@Injectable({
  providedIn: 'root'
})
export class DetalheService {

  constructor(private requisicaoApi: HttpClient) { }

  obterMoedaId(id: number):Observable<Moeda> {
    return this.requisicaoApi.get<Moeda>(`localhost:3000/api/cripto/obter-moeda/peloid?id=${id}`);

  }
  }


