"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.addLivro = function (livro) {
        this.livros.push(livro);
    };
    Biblioteca.prototype.listarLivros = function () {
        console.log('opcoes de livro');
        this.livros.forEach(function (livro) {
            console.log(livro.descricao());
        });
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
