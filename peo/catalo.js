"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalo = void 0;
var Catalo = /** @class */ (function () {
    function Catalo() {
        this.movies = [];
    }
    Catalo.prototype.addMovie = function (movie) {
        this.movies.push(movie);
    };
    Catalo.prototype.listarMovies = function () {
        console.log('catalogo de filme');
        this.movies.forEach(function (movie) {
            console.log(movie.descricao());
        });
    };
    return Catalo;
}());
exports.Catalo = Catalo;
