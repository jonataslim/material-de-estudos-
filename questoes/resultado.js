"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livro_1 = require("./livro");
var escolhas_1 = require("./escolhas");
function filtrarLivros(livros, preco) {
    return livros.filter(function (livro) { return livro.getPreco() > preco; });
}
var livro1 = new livro_1.Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 49.90);
var livro2 = new livro_1.Livro('1984', 'George Orwell', 34.90);
var livro3 = new livro_1.Livro('O Alquimista', 'Paulo Coelho', 39.90);
var livro4 = new livro_1.Livro('Dom Casmurro', 'Machado de Assis', 24.90);
var livro5 = new livro_1.Livro('A Culpa é das Estrelas', 'John Green', 29.90);
var escolhas = new escolhas_1.Escolha();
escolhas.addLivro(livro1);
escolhas.addLivro(livro2);
escolhas.addLivro(livro3);
escolhas.addLivro(livro4);
escolhas.addLivro(livro5);
escolhas.listarLivros();
var livrosFiltrados = filtrarLivros([livro1, livro2, livro3, livro4, livro5], 30); // Exemplo de preço para filtrar
