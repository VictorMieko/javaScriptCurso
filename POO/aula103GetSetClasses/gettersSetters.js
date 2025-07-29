// Dado primitivo, cria uma chave privada dentro do objeto, não é possivel modifica-la fora do objeto
const _velocidade = Symbol('velocidade'); // cria um id aleatorio | Symbol(descritor);
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; // atribuição do symbol
    }

    get velocidade() { // retorna a velocidade verdadeira, impedindo a criação de outra chave
        console.log('GETTER');
        return this[_velocidade];
    }
    set velocidade(value) {
        console.log('SETTER');
        if (typeof value !== 'number') return;
        if (value >= 100 || value <= 0) return;

        this[_velocidade] = value;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return; // limite de velocidade
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade] <= 100) return; // freia e não dá ré
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');
c1.velocidade = 99; // configura o setter
console.log(c1.velocidade); // Getter


/*
for(let i = 0; i<= 200; i++){
    c1.acelerar();
}
*/

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    set nomeCompleto(value) { // divide o nome e sobrenome e atribui a suas variáveis
        value = value.split(' ');
        this.nome = value.shift();
        this.sobrenome = value.join(' ');
    }
}
const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda Oliveira';
console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
