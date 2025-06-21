const pessoa = {
    nome:'Kaio',
    sobrenome: 'Rodrigo',
    idade: '69',
    endereco: {
        //rua: 'AV LOLI',
        numero: 16
    }
};
//atribuição via desestruturação
//nome = 'mario' (valor padrão)
//nome da variavel nome = teste
const { nome: teste = 'mario', sobrenome, idade, endereco: { rua: r = 'Ado-chan', numero } } = pessoa;
console.log(teste, sobrenome, r, numero);

const { nome, idade: i, ...resto } = pessoa;
console.log(nome, i, resto);