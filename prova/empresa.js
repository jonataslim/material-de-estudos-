"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }
    // Método para adicionar funcionário
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    // Método para listar funcionários
    listarFuncionarios() {
        console.log(`Funcionários da empresa ${this.nome}:`);
        this.funcionarios.forEach(funcionario => {
            console.log(funcionario.descricao());
        });
    }
}
exports.Empresa = Empresa;
