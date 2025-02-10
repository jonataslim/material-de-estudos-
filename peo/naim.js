"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var catalo_1 = require("./catalo");
function filtrarMovieAno(movies, ano) {
    return movies.filter(function (movie) { return movie.getLancamento() > ano; });
}
var filme1 = new movie_1.Movie("A Origem", "Christopher Nolan", 2010);
filme1.addAvaliacao(5);
filme1.addAvaliacao(4);
var filme2 = new movie_1.Movie("Interestelar", "Christopher Nolan", 2014);
filme2.addAvaliacao(5);
filme2.addAvaliacao(5);
var filme3 = new movie_1.Movie("Matrix", "Lana e Lilly Wachowski", 1999);
filme3.addAvaliacao(4);
filme3.addAvaliacao(4);
var filme4 = new movie_1.Movie("Pulp Fiction: Tempo de Violência", "Quentin Tarantino", 1994);
filme4.addAvaliacao(5);
filme4.addAvaliacao(4);
var filme5 = new movie_1.Movie("Duna", "Denis Villeneuve", 2021);
filme5.addAvaliacao(5);
filme5.addAvaliacao(5);
// Criando o catálogo e adicionando os filmes
var catalogo = new catalo_1.Catalo();
catalogo.addMovie(filme1);
catalogo.addMovie(filme2);
catalogo.addMovie(filme3);
catalogo.addMovie(filme4);
catalogo.addMovie(filme5);
catalogo.listarMovies();
var movieFiltrados = filtrarMovieAno([filme1, filme2, filme3, filme4, filme5], 2000);
console.log('\nFilmes lancados apos 2000');
movieFiltrados.forEach(function (movie) {
    console.log("".concat(movie.getTitulo(), " (").concat(movie.getLancamento, ")"));
});
