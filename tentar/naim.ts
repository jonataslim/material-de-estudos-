import { Movie } from "./movie";
import { Catalo } from "./catalo";

function filtrarMovieAno(movies: Movie[], ano: number): Movie[] {
    return movies.filter(movie => movie.getLancamento() > ano);
}

const filme1 = new Movie("A Origem", "Christopher Nolan", 2010);
filme1.addAvaliacao(5);
filme1.addAvaliacao(4);

const filme2 = new Movie("Interestelar", "Christopher Nolan", 2014);
filme2.addAvaliacao(5);
filme2.addAvaliacao(5);

const filme3 = new Movie("Matrix", "Lana e Lilly Wachowski", 1999);
filme3.addAvaliacao(4);
filme3.addAvaliacao(4);

const filme4 = new Movie("Pulp Fiction: Tempo de Violência", "Quentin Tarantino", 1994);
filme4.addAvaliacao(5);
filme4.addAvaliacao(4);

const filme5 = new Movie("Duna", "Denis Villeneuve", 2021);
filme5.addAvaliacao(5);
filme5.addAvaliacao(5);

// Criando o catálogo e adicionando os filmes
const catalogo = new Catalo();
catalogo.addMovie(filme1);
catalogo.addMovie(filme2);
catalogo.addMovie(filme3);
catalogo.addMovie(filme4);
catalogo.addMovie(filme5);

catalogo.listarMovies();

const movieFiltrados = filtrarMovieAno([filme1, filme2, filme3, filme4, filme5], 2000)

console.log('\nFilmes lancados apos 2000');
movieFiltrados.forEach(movie => {
    console.log(`${movie.getTitulo()} (${movie.getLancamento})`);
})