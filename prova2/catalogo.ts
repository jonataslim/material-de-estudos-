import { Filme } from './filme';

export class Catalogo {
    private filmes: Filme[];

    constructor() {
        this.filmes = [];
    }

    // Adicionar filme ao catálogo
    adicionarFilme(filme: Filme): void {
        this.filmes.push(filme);
    }

    // Listar todos os filmes
    listarFilmes(): void {
        console.log("Catálogo de Filmes:");
        this.filmes.forEach(filme => {
            console.log(filme.descricao());
        });
    }
}
