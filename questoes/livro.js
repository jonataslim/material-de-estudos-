"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, lancamento) {
        this.titulo = titulo;
        this.autor = autor;
        this.lancamento = lancamento;
        this.avaliacao = [];
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getLancamento = function () {
        return this.lancamento;
    };
    Livro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Livro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Livro.prototype.setLancamento = function (lancamento) {
        this.lancamento = lancamento;
    };
    Livro.prototype.addAvaliacao = function (nota) {
        if (nota >= 1 && nota <= 5) {
            this.avaliacao.push(nota);
        }
        else {
            console.log('a avaliacao tem que estar entre 1 e 5');
        }
    };
    Livro.prototype.calcularMedia = function () {
        if (this.avaliacao.length === 0)
            return 0;
        var soma = this.avaliacao.reduce(function (total, nota) { return total + nota; }, 0);
        return soma / this.avaliacao.length;
    };
    Livro.prototype.descricao = function () {
        return "livro: ".concat(this.titulo, " autor: (").concat(this.autor, ") lancamento ").concat(this.lancamento, " meida: ").concat(this.calcularMedia().toFixed(2), " ");
    };
    return Livro;
}());
exports.Livro = Livro;
