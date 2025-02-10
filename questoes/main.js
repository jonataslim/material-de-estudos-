"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livro_1 = require("./livro");
var biblioteca_1 = require("./biblioteca");
function filtrarLivros(livros, ano) {
    return livros.filter(function (livro) { return livro.getLancamento() > ano; });
}
var filme1 = new livro_1.Livro("Dom Quixote", "Miguel de Cervantes", 1605);
filme1.addAvaliacao(5);
filme1.addAvaliacao(4);
var filme2 = new livro_1.Livro("Orgulho e Preconceito", "Jane Austen", 1813);
filme2.addAvaliacao(5);
filme2.addAvaliacao(5);
var filme3 = new livro_1.Livro("1984", "George Orwell", 1949);
filme3.addAvaliacao(4);
filme3.addAvaliacao(4);
var filme4 = new livro_1.Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
filme4.addAvaliacao(5);
filme4.addAvaliacao(5);
var filme5 = new livro_1.Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997);
filme5.addAvaliacao(5);
filme5.addAvaliacao(4);
// Criando o catálogo e adicionando os filmes
var escolhas = new biblioteca_1.Biblioteca();
escolhas.addLivro(filme1);
escolhas.addLivro(filme2);
escolhas.addLivro(filme3);
escolhas.addLivro(filme4);
escolhas.addLivro(filme5);
escolhas.listarLivros();
var livroFiltrados = filtrarLivros([filme1, filme2, filme3, filme4, filme5], 1950);
console.log('\nLivros lancados apos 1950');
livroFiltrados.forEach(function (livro) {
    console.log("".concat(livro.getTitulo(), " (").concat(livro.getLancamento, ")"));
});
