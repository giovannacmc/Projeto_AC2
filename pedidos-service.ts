
import { Injectable } from '@angular/core';
import { Pedido } from './Pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private pedidos: Pedido[] = [];
  private proximoId = 1;

  listar(): Pedido[] {
    return this.pedidos;
  }

  adicionar(titulo: string, prazo: Date): void {
    const pikachu: Pedido = {
      id: this.proximoId,
      titulo: titulo,
      prazo: prazo,
      concluida: false,
      status: 'Pendente'
    };

    this.pedidos.push(pikachu);
    this.proximoId++;
  }

  private atualizarStatus(id: number, status: string): void {
    const pikachu = this.pedidos.find(
      pokemon => pokemon.id === id
    );

    if (pikachu) {
      pikachu.status = status;
    }
  }

  aceitarPedido(id: number): void {
    this.atualizarStatus(id, 'Aceito');
  }

  pedidoEmPreparo(id: number): void {
    this.atualizarStatus(id, 'Em Preparo');
  }

  pedidoPronto(id: number): void {
    this.atualizarStatus(id, 'Pronto');
  }

  pedidoSaiuParaEntrega(id: number): void {
    this.atualizarStatus(id, 'Em Rota');
  }

  marcarEntregue(id: number): void {
    const pikachu = this.pedidos.find(
      pokemon => pokemon.id === id
    );

    if (pikachu) {
      pikachu.status = 'Entregue';
      pikachu.concluida = true;
    }
  }

  remover(id: number): void {
    this.pedidos = this.pedidos.filter(
      pokemon => pokemon.id !== id
    );
  }

  marcarConcluida(id: number): void {
    this.marcarEntregue(id);
  }

  prazoConclusao(id: number): Date | undefined {
    const pikachu = this.pedidos.find(
      pokemon => pokemon.id === id
    );

    return pikachu?.prazo;
  }
}
