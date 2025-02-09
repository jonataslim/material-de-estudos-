export class Movie {
    private titulo: string;
    private diretor: string;
    private lancamento: number;
    private avaliacao: number[]

    constructor(titulo: string, diretor: string, lancamento: number) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.lancamento = lancamento
        this.avaliacao = []
    }

    getTitulo(): string {
        return this.titulo;
    }

    getDiretor(): string {
        return this.diretor;
    }

    getLancamento(): number {
        return this.lancamento;
    
    } 

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setDiretor(diretor: string): void {
        this.diretor = diretor;
    }

    setLancamento(lancamento: number): void {
        this.lancamento = lancamento;
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
        return `${this.titulo} (${this.lancamento}) - Diretor: ${this.diretor} - Media: ${this.calcularMedia().toFixed(2)}`
    }

}