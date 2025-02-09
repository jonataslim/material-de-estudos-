export class Funcionario {
    private nome: string;
    private cargo: string;
    private salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    // Getters
    getNome(): string {
        return this.nome;
    }

    getCargo(): string {
        return this.cargo;
    }

    getSalario(): number {
        return this.salario;
    }

    // Setters
    setNome(nome: string): void {
        this.nome = nome;
    }

    setCargo(cargo: string): void {
        this.cargo = cargo;
    }

    // Método específico para aplicar aumento
    aplicarAumento(percentual: number): void {
        if (percentual > 0) {
            this.salario += this.salario * (percentual / 100);
        } else {
            console.log("O aumento percentual deve ser maior que zero.");
        }
    }

    descricao(): string {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${this.salario.toFixed(2)}`;
    }
}
