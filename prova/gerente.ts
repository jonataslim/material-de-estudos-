import { Funcionario } from './funcio';

export class Gerente extends Funcionario {
    private bonus: number;

    constructor(nome: string, cargo: string, salario: number, bonus: number) {
        super(nome, cargo, salario);
        this.bonus = bonus;
    }

    // Getter e Setter para o bônus
    getBonus(): number {
        return this.bonus;
    }

    setBonus(bonus: number): void {
        if (bonus >= 0) {
            this.bonus = bonus;
        } else {
            console.log("O bônus não pode ser negativo.");
        }
    }

    // Sobrescreve o método descricao
    descricao(): string {
        const salarioTotal = this.getSalario() + this.bonus;
        return `${super.descricao()}, Bônus: R$ ${this.bonus.toFixed(2)}, Salário Total: R$ ${salarioTotal.toFixed(2)}`;
    }
}
