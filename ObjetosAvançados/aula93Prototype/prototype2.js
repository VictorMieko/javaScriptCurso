//  Manipulação de Prototype
// Não é recomendado utilizar __proto__

//new Object (construtor) -> Object.prototype === __proto__
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};
Object.setPrototypeOf(objB, objA); // permite o __proto__ do objB acessar a chave do objA
console.log(objB.chaveA);

const objC = new Object();
objC.chaveC = 'C';
Object.setPrototypeOf(objC, objB); // objC tem acesso a todos as chaves que o objB tem
console.log(objC.chaveB, objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 10));
};
const p1 = new Produto('camiseta', 50);
p1.desconto(100);
console.log(p1);

// Declaração literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(100);
console.log(p2);

// Cria e "seta" o prototype de outro objeto
const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Copo'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 20
    }
});
p3.desconto(50);
console.log(p3);
