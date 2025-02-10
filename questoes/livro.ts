export class Livro {
    private titulo: string;
    private autor: string;
    private preco: number;

    constructor (titulo: string, autor: string, preco: number) {
        this.titulo = titulo
        this.autor = autor 
        this.preco = preco
    }

    getTitulo(): string {
        return this.titulo;
    }

    getAutor(): string {
        return this.autor
    }

    getPreco(): number {
        return this.preco
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    setPreco(preco: number): void {
        this.preco = preco;
    }

    descricao(): string {
        return `livro: ${this.titulo} autor: (${this.autor}) preço: ${this.preco} `
    }
    
}