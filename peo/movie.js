"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(titulo, diretor, lancamento) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.lancamento = lancamento;
        this.avaliacao = [];
    }
    Movie.prototype.getTitulo = function () {
        return this.titulo;
    };
    Movie.prototype.getDiretor = function () {
        return this.diretor;
    };
    Movie.prototype.getLancamento = function () {
        return this.lancamento;
    };
    Movie.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Movie.prototype.setDiretor = function (diretor) {
        this.diretor = diretor;
    };
    Movie.prototype.setLancamento = function (lancamento) {
        this.lancamento = lancamento;
    };
    Movie.prototype.addAvaliacao = function (nota) {
        if (nota >= 1 && nota <= 5) {
            this.avaliacao.push(nota);
        }
        else {
            console.log('a avaliacao tem que estar entre 1 e 5');
        }
    };
    Movie.prototype.calcularMedia = function () {
        if (this.avaliacao.length === 0)
            return 0;
        var soma = this.avaliacao.reduce(function (total, nota) { return total + nota; }, 0);
        return soma / this.avaliacao.length;
    };
    Movie.prototype.descricao = function () {
        return "".concat(this.titulo, " (").concat(this.lancamento, ") - Diretor: ").concat(this.diretor, " - Media: ").concat(this.calcularMedia().toFixed(2));
    };
    return Movie;
}());
exports.Movie = Movie;
