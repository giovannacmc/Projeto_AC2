
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../pedidos-service';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-pedidos.html',
  styleUrl: './lista-pedidos.css'
})
export class ListaPedidos {

  pedidosService = inject(PedidosService);

  aceitar(id: number): void {
    this.pedidosService.aceitarPedido(id);
  }

  emPreparo(id: number): void {
    this.pedidosService.pedidoEmPreparo(id);
  }

  emRota(id: number): void {
    this.pedidosService.pedidoSaiuParaEntrega(id);
  }

  concluir(id: number): void {
    this.pedidosService.marcarEntregue(id);
  }

  cancelarPedido(id: number): void {
    this.pedidosService.remover(id);
  }

  get total(): number {
    return this.pedidosService.listar().length;
  }

  get concluidas(): number {
    return this.pedidosService.listar().filter(
      pokemon => pokemon.concluida
    ).length;
  }

  get pendentes(): number {
    return this.pedidosService.listar().filter(
      pokemon => !pokemon.concluida
    ).length;
  }
}

