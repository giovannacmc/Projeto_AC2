import { Routes } from '@angular/router';
import { CadastrarPedido } from './cadastrar-pedido/cadastrar-pedido';
import { ListaPedidos } from './lista-pedidos/lista-pedidos';

export const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastrarPedido
  },
  {
    path: 'pedidos',
    component: ListaPedidos },
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'cadastro'
  }
];
