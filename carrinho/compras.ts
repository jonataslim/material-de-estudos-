// Compra.ts
import { Produto } from "./produtos";

export class Compra {
    private produtos: Produto[];

    constructor() {
        this.produtos = [];
    }

    addProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    calcularTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.getPreco(), 0);
    }

    listarProdutos(): void {
        this.produtos.forEach(produto => {
            console.log(`${produto.getNome()}: R$ ${produto.getPreco()}`);
        });
    }
}
