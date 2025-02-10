"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produtos_1 = require("./produtos");
var compras_1 = require("./compras");
var produto1 = new produtos_1.Produto('Camiseta', 39.90);
var produto2 = new produtos_1.Produto('Calça Jeans', 89.90);
var produto3 = new produtos_1.Produto('Tênis Esportivo', 159.90);
// Criando o carrinho e adicionando produtos
var carrinho = new compras_1.Compra();
carrinho.addProduto(produto1);
carrinho.addProduto(produto2);
carrinho.addProduto(produto3);
// Listando produtos no carrinho
console.log("Produtos no Carrinho:");
carrinho.listarProdutos();
// Calculando o total
var total = carrinho.calcularTotal();
console.log("\nTotal do Carrinho: R$ ".concat(total.toFixed(2)));
