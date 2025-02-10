"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    // Getters
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.getCargo = function () {
        return this.cargo;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    // Setters
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.setCargo = function (cargo) {
        this.cargo = cargo;
    };
    // Método específico para aplicar aumento
    Funcionario.prototype.aplicarAumento = function (percentual) {
        if (percentual > 0) {
            this.salario += this.salario * (percentual / 100);
        }
        else {
            console.log("O aumento percentual deve ser maior que zero.");
        }
    };
    Funcionario.prototype.descricao = function () {
        return "Nome: ".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Sal\u00E1rio: R$ ").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
