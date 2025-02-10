import { Livro } from "./livro";
import { Biblioteca } from "./biblioteca";

function filtrarLivros(livros: Livro[], ano: number): Livro[] {
    return livros.filter(livro => livro.getLancamento() > ano)
}

const filme1 = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
filme1.addAvaliacao(5);
filme1.addAvaliacao(4);

const filme2 = new Livro("Orgulho e Preconceito", "Jane Austen", 1813);
filme2.addAvaliacao(5);
filme2.addAvaliacao(5);

const filme3 = new Livro("1984", "George Orwell", 1949);
filme3.addAvaliacao(4);
filme3.addAvaliacao(4);

const filme4 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
filme4.addAvaliacao(5);
filme4.addAvaliacao(5);

const filme5 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997);
filme5.addAvaliacao(5);
filme5.addAvaliacao(4);

// Criando o catálogo e adicionando os filmes
const escolhas = new Biblioteca();
escolhas.addLivro(filme1);
escolhas.addLivro(filme2);
escolhas.addLivro(filme3);
escolhas.addLivro(filme4);
escolhas.addLivro(filme5);

escolhas.listarLivros() 

const livroFiltrados = filtrarLivros([filme1, filme2, filme3, filme4, filme5], 1950)

console.log('\nLivros lancados apos 1950');
livroFiltrados.forEach(livro => {
    console.log(`${livro.getTitulo()} (${livro.getLancamento})`);
})