export class Escola {
  private nome: string;
  private turma: string
  private nota: number[]
  constructor(nome: string, estudantes: string, estudantetecnico: string, turma: string) {
    this.nome = nome
    this.turma = turma
    this.nota = []
  }  

  getNome(): string {
    return this.nome
  }

  getTurma(): string {
    return this.turma
  }

  setNome(nome: string) : void {
    this.nome = nome
  }

  setTurma(turma: string) : void {
    this.turma = turma
  }
  addNota(nota: number): void {
    if (nota >= 1 && nota <= 100) {
        this.nota.push(nota);
    } else { 
        console.log('a nota deve estar entre 1 e 100')
    }
}

calcularMedia(): number {
    if (this.nota.length === 0) return 0;
    const soma = this.nota.reduce((total, nota) => total + nota, 0)
    return soma / this.nota.length;
}
  descricao(): string {
    return `nome: ${this.nome} (${this.turma}) nota: ${this.calcularMedia()} `
  }
}