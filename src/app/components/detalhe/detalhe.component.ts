import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Moeda } from 'src/app/models/moeda';
import { DetalheService } from './service/detalhe.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  
  moedaDetalheHtml = {} as Moeda;

  constructor(private service: DetalheService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;

    var idMoeda = parseInt(this.activatedRouter.snapshot.paramMap.get('id')!)

    this.service
      .obterMoedaDetalhe(idMoeda)
      .subscribe((moedaDetalhe: Moeda) => {

        this.moedaDetalheHtml = moedaDetalhe

      })
  }
}
