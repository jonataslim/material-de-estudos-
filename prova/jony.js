"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = require("./empresa");
const funcio_1 = require("./funcio");
const gerente_1 = require("./gerente");
// Criando a instância da Empresa
const empresa = new empresa_1.Empresa("Tech Soluções");
// Criando funcionários
const funcionario1 = new funcio_1.Funcionario("João", "Desenvolvedor", 3000);
const funcionario2 = new funcio_1.Funcionario("Maria", "Analista", 4000);
const funcionario3 = new funcio_1.Funcionario("Carlos", "Designer", 3500);
// Criando gerentes
const gerente1 = new gerente_1.Gerente("Lucia", "Gerente de TI", 7000, 1500);
const gerente2 = new gerente_1.Gerente("Carlos", "Gerente de Marketing", 8000, 2000);
// Adicionando funcionários e gerentes à empresa
empresa.adicionarFuncionario(funcionario1);
empresa.adicionarFuncionario(funcionario2);
empresa.adicionarFuncionario(funcionario3);
empresa.adicionarFuncionario(gerente1);
empresa.adicionarFuncionario(gerente2);
// Listando funcionários antes dos aumentos
empresa.listarFuncionarios();
// Aplicando aumentos nos salários
funcionario1.aplicarAumento(10); // 10% de aumento
funcionario2.aplicarAumento(15); // 15% de aumento
gerente1.aplicarAumento(10); // 10% de aumento no gerente
gerente2.setBonus(2500); // Aumentando o bônus do gerente 2
// Listando funcionários após os aumentos
empresa.listarFuncionarios();
