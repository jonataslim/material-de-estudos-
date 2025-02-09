import { Empresa } from './empresa';
import { Funcionario } from './funcio';
import { Gerente } from './gerente';

// Criando a instância da Empresa
const empresa = new Empresa("Tech Soluções");

// Criando funcionários
const funcionario1 = new Funcionario("João", "Desenvolvedor", 3000);
const funcionario2 = new Funcionario("Maria", "Analista", 4000);
const funcionario3 = new Funcionario("Carlos", "Designer", 3500);

// Criando gerentes
const gerente1 = new Gerente("Lucia", "Gerente de TI", 7000, 1500);
const gerente2 = new Gerente("Carlos", "Gerente de Marketing", 8000, 2000);

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
