import { Funcionario } from './funcio';

export class Empresa {
    private nome: string;
    private funcionarios: Funcionario[];

    constructor(nome: string) {
        this.nome = nome;
        this.funcionarios = [];
    }

    // Método para adicionar funcionário
    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    // Método para listar funcionários
    listarFuncionarios(): void {
        console.log(`Funcionários da empresa ${this.nome}:`);
        this.funcionarios.forEach(funcionario => {
            console.log(funcionario.descricao());
        });
    }
}
