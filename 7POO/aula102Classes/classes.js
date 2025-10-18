// Classes => Semelhante a construction function

class Pessoa {
    constructor(nome, sobrenome) { // necessário para parâmetros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // métodos vão automaticamente para o prototype
        console.log(`${this.nome} está falando.`);
    }
}
const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);
p1.falar();

// A mesma coisa mas em constructor function
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`)
}
const p2 = new Pessoa2('carlos', 'Henrique');
console.log(p2);
console.log(p2.falar());
