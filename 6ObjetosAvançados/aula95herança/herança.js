// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};
const produto = new Produto('generico', 123);
console.log(produto);

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco); // usa Produto como fôrma
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // cria um objeto prototype vazio e atribui o prototype de Produto a ele
Camiseta.prototype.constructor = Camiseta; // usa o construtor real do objeto

// o JavaScript utiliza esse por estar mais perto do objeto
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const camiseta = new Camiseta('regata', 7.5, 'Preta');
camiseta.aumento(100);
console.log(camiseta);

function Caneca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,       
        get: function () {
            return estoque;
        },
        set: function (value) {
            if (typeof value !== 'number') return;
            estoque = value;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('caneca', 30, 'Porcelana', 5);
caneca.desconto(15);
console.log(caneca);
