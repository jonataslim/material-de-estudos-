"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const funcio_1 = require("./funcio");
class Gerente extends funcio_1.Funcionario {
    constructor(nome, cargo, salario, bonus) {
        super(nome, cargo, salario);
        this.bonus = bonus;
    }
    // Getter e Setter para o bônus
    getBonus() {
        return this.bonus;
    }
    setBonus(bonus) {
        if (bonus >= 0) {
            this.bonus = bonus;
        }
        else {
            console.log("O bônus não pode ser negativo.");
        }
    }
    // Sobrescreve o método descricao
    descricao() {
        const salarioTotal = this.getSalario() + this.bonus;
        return `${super.descricao()}, Bônus: R$ ${this.bonus.toFixed(2)}, Salário Total: R$ ${salarioTotal.toFixed(2)}`;
    }
}
exports.Gerente = Gerente;
