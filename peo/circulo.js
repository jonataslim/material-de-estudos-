"use strict";
class Circulo {
    constructor(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    exibir() {
        return `Raio: ${this.raio} X: ${this.x} Y: ${this.y}`;
    }
}
let circulo1 = new Circulo(2, 0, 0);
let circulo2 = new Circulo(3, 5, 2);
console.log(circulo1.exibir());
console.log(circulo2.exibir());
