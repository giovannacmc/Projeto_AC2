import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../pedidos-service';
@Component({
selector: 'app-cadastrar-pedido',
imports: [FormsModule, RouterLink],
templateUrl: './cadastrar-pedidos.html',
styleUrl: './cadastrar-pedidos.css'
})
export class CadastrarPedido {
private pedidosService = inject(PedidosService);
titulo: string = '';
prazo: string = '';
cadastrar(): void {
if (!this.titulo.trim() || !this.prazo) {
return;
}
const dataPrazo = new Date(
this.prazo + 'T00:00:00'
);
this.pedidosService.adicionar(
this.titulo.trim(),
dataPrazo
);
this.titulo = '';
this.prazo = '';
}
}