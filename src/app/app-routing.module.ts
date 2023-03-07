import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheComponent } from './components/detalhe/detalhe.component';
import { ListagemComponent } from './components/listagem/listagem.component';

const routes: Routes = [
  
//path: caminho, ex: http://localhost:4200/default//
{path:'detalhar/:id', component: DetalheComponent}, 
{path:'', component: ListagemComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
