"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
var Compra = /** @class */ (function () {
    function Compra() {
        this.produtos = [];
    }
    Compra.prototype.addProduto = function (produto) {
        this.produtos.push(produto);
    };
    Compra.prototype.calcularTotal = function () {
        return this.produtos.reduce(function (total, produto) { return total + produto.getPreco(); }, 0);
    };
    Compra.prototype.listarProdutos = function () {
        this.produtos.forEach(function (produto) {
            console.log("".concat(produto.getNome(), ": R$ ").concat(produto.getPreco()));
        });
    };
    return Compra;
}());
exports.Compra = Compra;
