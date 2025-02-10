"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    return Produto;
}());
exports.Produto = Produto;
