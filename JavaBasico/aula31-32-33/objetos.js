//objeto literal(?)
const pessoa1 = {
    nome: 'Luiz', //não precisa declarar com const e let
    sobrenome: 'MIranda',
    idade: 25
};
console.log(pessoa1.nome);// "." serve para acessar um conteúdo do objeto
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//função que cria um objeto
function criaPessoa(nome, sobrenome, idade){//Recebe parâmetro
    return{nome, sobrenome, idade};//objeto (quando for receber parâmetro pode fazer assim)
}
const pessoa01 = criaPessoa('Luiz', 'Otávio', 25);//envia argumento
console.log(`pessoa01: ${pessoa01.nome}`);
const pessoa02 = criaPessoa('Maria', 'Otávio', 24);
console.log(`pessoa01: ${pessoa02.nome}`);

//objeto com método(função)
const pessoa2 = {
    nome: 'barabarabara',
    sobrenome: 'bereberebere',
    idade: 15,

    fala(){//função dentro de um objeto se chama método
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade}.`);//this = nesse contexto represente esse objeto
    },//sempre precisa por ","

    incrementaIdade(){
        this.idade++;
    }
};
pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();