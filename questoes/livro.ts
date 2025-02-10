export class Livro {
    private titulo: string;
    private autor: string;
    private lancamento: number;
    private avaliacao: number[];
    
    constructor (titulo: string, autor: string, lancamento: number) {
        this.titulo = titulo
        this.autor = autor 
        this.lancamento = lancamento
        this.avaliacao = []
    }

    getTitulo(): string {
        return this.titulo;
    }

    getAutor(): string {
        return this.autor
    }

    getLancamento(): number {
        return this.lancamento
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    setLancamento(lancamento: number): void {
        this.lancamento = lancamento
    }
    
    addAvaliacao(nota: number): void {
        if (nota >= 1 && nota <= 5) {
            this.avaliacao.push(nota);
        } else { 
            console.log('a avaliacao tem que estar entre 1 e 5')
        }
    }

    calcularMedia(): number {
        if (this.avaliacao.length === 0) return 0;
        const soma = this.avaliacao.reduce((total, nota) => total + nota, 0)
        return soma / this.avaliacao.length;
    }

    descricao(): string {
        return `livro: ${this.titulo} autor: (${this.autor}) lancamento ${this.lancamento} media: ${this.calcularMedia().toFixed(2)} `
    }
    
}