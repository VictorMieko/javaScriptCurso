//defineProperty () -> define uma propriedade
//defineProperties () -> define mais de uma propriedade
//uteis para coisas sensíveis

function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque', { //(objeto, propriedade, e descriptor)
        enumerable: true,//permite visualizar a chave (retorna undefined)
        value: estoque, //joga o value do estoque nele
        writable: false, //valor pode ser alterado? se sim true, se não false (pareceido com freeze)
        configurable: true //pode apagar, reconfigurar a chave? se sim true, se não false (definir outro object.property e/ou apagar chave)
    });

    Object.defineProperties(this, { //Objeto e descriptorMap
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        }
    });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);//para ver as chaves ativas (true)
