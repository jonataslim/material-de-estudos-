import { Movie } from "./movie";

export class Catalo { 
    private movies: Movie[];

    constructor() {
        this.movies = [];
    }

    addMovie(movie: Movie) : void {
        this.movies.push(movie);
    }

    listarMovies(): void {
        console.log('catalogo de filme');
        this.movies.forEach(movie => {
            console.log(movie.descricao())
        })
    }
}