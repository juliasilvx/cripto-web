//Importando ferramentas que serão utilizadas no meu serviço//
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  //Aqui, o constructor (método p/ criar e inicializar um objeto criado a partir de uma classe)//
  //preenche a variável requisicaoApi com o HttpClient )ferramenta que possibilita realizae requisições em uma api)//
  constructor(private requisicaoApi: HttpClient) { }

//Neste método, é feito uma requisição do front p/ o back (api) e retorna uma observavel//
  obterMoedas():Observable<Moeda[]> {
    return this.requisicaoApi.get<Moeda[]>('/api/cripto/obter-moedas');

  }
  

}
