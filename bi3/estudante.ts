import { Escola } from "./escola";
export class Estudante {
    private nome: string 
    private estudantes: Escola[]

    constructor(nome: string) {
        this.nome = nome
        this.estudantes = []
    }

    addEstudante(estuda: Estudante) : void {
        this.estudantes.push(estuda);
    }

    listarEstudantes(): void {
    console.log(`estudantes ${this.nome}: `)
    this.estudantes.forEach(estuda => {
        console.log(estuda.descricao())
    })
}
}