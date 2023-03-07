import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { DetalheService } from './service/detalhe.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  moedaDetalheHtml = {} as Moeda;

  constructor(private service: DetalheService) { }


  ngOnInit(): void {
    
    var id = 1;

    this.service.obterMoedaDetalhe(id).subscribe((moedaDetalhe: Moeda) => {
      this.moedaDetalheHtml = moedaDetalhe;
  })

  }

  
}
