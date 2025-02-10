import { Produto } from "./produtos";
import { Compra } from "./compras";

const produto1 = new Produto('Camiseta', 39.90);
const produto2 = new Produto('Calça Jeans', 89.90);
const produto3 = new Produto('Tênis Esportivo', 159.90);

// Criando o carrinho e adicionando produtos
const carrinho = new Compra();
carrinho.addProduto(produto1);
carrinho.addProduto(produto2);
carrinho.addProduto(produto3);

// Listando produtos no carrinho
console.log("Produtos no Carrinho:");
carrinho.listarProdutos();

// Calculando o total
const total = carrinho.calcularTotal();
console.log(`\nTotal do Carrinho: R$ ${total.toFixed(2)}`);