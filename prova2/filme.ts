export class Filme {
    private titulo: string;
    private diretor: string;
    private anoLancamento: number;
    private avaliacoes: number[];

    constructor(titulo: string, diretor: string, anoLancamento: number) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
        this.avaliacoes = [];
    }

    // Getters
    getTitulo(): string {
        return this.titulo;
    }

    getDiretor(): string {
        return this.diretor;
    }

    getAnoLancamento(): number {
        return this.anoLancamento;
    }

    // Setters
    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    setDiretor(diretor: string): void {
        this.diretor = diretor;
    }

    setAnoLancamento(ano: number): void {
        this.anoLancamento = ano;
    }

    // Adicionar avaliação
    adicionarAvaliacao(nota: number): void {
        if (nota >= 1 && nota <= 5) {
            this.avaliacoes.push(nota);
        } else {
            console.log("A avaliação deve ser um valor entre 1 e 5.");
        }
    }

    // Calcular a média das avaliações
    calcularMediaAvaliacoes(): number {
        if (this.avaliacoes.length === 0) return 0;
        const soma = this.avaliacoes.reduce((total, nota) => total + nota, 0);
        return soma / this.avaliacoes.length;
    }

    // Descrição do filme
    descricao(): string {
        return `${this.titulo} (${this.anoLancamento}) - Diretor: ${this.diretor} - Média das avaliações: ${this.calcularMediaAvaliacoes().toFixed(2)}`;
    }
}
