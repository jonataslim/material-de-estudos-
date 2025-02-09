import { Filme } from './filme';
import { Catalogo } from './catalogo';

// Função para filtrar filmes por ano
function filtrarFilmesPorAno(filmes: Filme[], ano: number): Filme[] {
    return filmes.filter(filme => filme.getAnoLancamento() > ano);
}

// Criando filmes
const filme1 = new Filme("A Origem", "Christopher Nolan", 2010);
filme1.adicionarAvaliacao(5);
filme1.adicionarAvaliacao(4);

const filme2 = new Filme("Interestelar", "Christopher Nolan", 2014);
filme2.adicionarAvaliacao(5);
filme2.adicionarAvaliacao(5);

const filme3 = new Filme("Matrix", "Lana e Lilly Wachowski", 1999);
filme3.adicionarAvaliacao(4);
filme3.adicionarAvaliacao(4);

const filme4 = new Filme("Pulp Fiction: Tempo de Violência", "Quentin Tarantino", 1994);
filme4.adicionarAvaliacao(5);
filme4.adicionarAvaliacao(4);

const filme5 = new Filme("Duna", "Denis Villeneuve", 2021);
filme5.adicionarAvaliacao(5);
filme5.adicionarAvaliacao(5);

// Criando o catálogo e adicionando os filmes
const catalogo = new Catalogo();
catalogo.adicionarFilme(filme1);
catalogo.adicionarFilme(filme2);
catalogo.adicionarFilme(filme3);
catalogo.adicionarFilme(filme4);
catalogo.adicionarFilme(filme5);

// Listando todos os filmes do catálogo
catalogo.listarFilmes();

// Filtrando filmes lançados após 2000
const filmesFiltrados = filtrarFilmesPorAno([filme1, filme2, filme3, filme4, filme5], 2000);

// Exibindo filmes filtrados (apenas título e ano de lançamento)
console.log("\nFilmes lançados após 2000:");
filmesFiltrados.forEach(filme => {
    console.log(`${filme.getTitulo()} (${filme.getAnoLancamento()})`);
});
