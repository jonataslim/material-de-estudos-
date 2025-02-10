"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escolha = void 0;
var Escolha = /** @class */ (function () {
    function Escolha() {
        this.livros = [];
    }
    Escolha.prototype.addLivro = function (livro) {
        this.livros.push(livro);
    };
    Escolha.prototype.listarLivros = function () {
        console.log('opcoes de livro');
        this.livros.forEach(function (livro) {
            console.log(livro.descricao());
        });
    };
    return Escolha;
}());
exports.Escolha = Escolha;
