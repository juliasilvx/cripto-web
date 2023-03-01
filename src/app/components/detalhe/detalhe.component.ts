import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { DetalheService } from './service/detalhe.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  constructor(private service: DetalheService) { }


  ngOnInit(): void {
    
    var id = 0;

    this.service.obterMoedaDetalhe(id).subscribe((moedaDetalhe: Moeda) => {

        })

  }

  
}
