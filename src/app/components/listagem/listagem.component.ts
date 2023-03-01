import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { ListagemService } from './service/listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})


/* O implements On Init diz para o meu
componente que ele tem uma classe de 
inicialização e que ele deve passar por 
ela antes de executar qual quer outra coisa */
export class ListagemComponent implements OnInit{

  id:number = 14;
  moedasExibirNoHtml: Moeda[] = [];
  router: any;
  constructor(private moedaService: ListagemService){

  }
  /*Quando inicar, ou seja, tudo que está dentro desta função será executado primeiro*/
  ngOnInit() {

  /* Indo no serviço obter moedas e aguardando o retorno da api com o subscribe que recebe uma função com o parametro do tipo retorno*/ 
  this.moedaService.obterMoedas().subscribe((moedasVindoDaApi: Moeda[]) => {

    this.moedasExibirNoHtml = moedasVindoDaApi

  })
}

detalhar(id:number){

  //redirecionamento p/ alguma rota da aplicação//
    this.router.navigateByUrl(`detalhar/${id}`)

}

}
