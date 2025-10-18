//Getter -> Obter valor
//Setter -> configurar valor

//função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque, o getter substitui
        get: function () { //pega o valor exibe
            return estoquePrivado;
        },
        //writable: false, o setter substitui
        set: function (value) {//value que o get retorna
            if (typeof value !== 'number') {
                throw new TypeError('não é number');
            }
            estoquePrivado = value;
        },
        configurable: true
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 400;
console.log(p1.estoque);

//função fabrica
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(value) {
            nome = value;
        }
    };
}
const p2 = criaProduto('camiseta');
console.log(p2.nome);
