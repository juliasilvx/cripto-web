import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { ListagemService } from './service/listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent implements OnInit{
  constructor(private moedaService: ListagemService){

  }
  /*Tudo que está dentro desta função será executado primeiro*/
  ngOnInit() {

  /* Indo no serviço obter moedas e aguardando o retorno da api com o subscribe que recebe uma função com o parametro do tipo retorno*/ 
    this.moedaService.obterMoedas().subscribe((moedas: Moeda[]) => {

      var teste = moedas;
      debugger;
    })
  }
}
