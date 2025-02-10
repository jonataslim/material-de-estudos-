import { Livro } from "./livro";
export class Biblioteca {
    private livros: Livro[];

    constructor() {
        this.livros = []
    }

    addLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    listarLivros(): void {
        console.log('opcoes de livro')
        this.livros.forEach(livro => {
            console.log(livro.descricao())
        })
    }
}