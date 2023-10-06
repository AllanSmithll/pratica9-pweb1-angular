import { Component } from '@angular/core';
import {PRODUTOS} from "../../shared/modelo/PRODUTOS";
import {Produto} from "../../shared/modelo/produto";

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {

  produtos = PRODUTOS;
  excluir(produtoARemover: Produto): void {
    const indx = this.produtos.findIndex(prod =>
      prod.nome === prod.nome);
    this.produtos.splice(indx, 1);
  }
}
