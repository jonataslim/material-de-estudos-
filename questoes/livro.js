"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getPreco = function () {
        return this.preco;
    };
    Livro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Livro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Livro.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    Livro.prototype.descricao = function () {
        return "livro: ".concat(this.titulo, " autor: (").concat(this.autor, ") pre\u00E7o: ").concat(this.preco, " ");
    };
    return Livro;
}());
exports.Livro = Livro;
