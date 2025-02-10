import { Livro } from "./livro";
import { Escolha } from "./escolhas";

function filtrarLivros(livros: Livro[], preco: number): Livro[] {
    return livros.filter(livro => livro.getPreco() > preco)
}

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 49.90);
const livro2 = new Livro('1984', 'George Orwell', 34.90);
const livro3 = new Livro('O Alquimista', 'Paulo Coelho', 39.90);
const livro4 = new Livro('Dom Casmurro', 'Machado de Assis', 24.90);
const livro5 = new Livro('A Culpa é das Estrelas', 'John Green', 29.90);

const escolhas = new Escolha();
escolhas.addLivro(livro1);
escolhas.addLivro(livro2);
escolhas.addLivro(livro3);
escolhas.addLivro(livro4);
escolhas.addLivro(livro5);

escolhas.listarLivros()

const livrosFiltrados = filtrarLivros([livro1, livro2, livro3, livro4, livro5], 30);  // Exemplo de preço para filtrar

