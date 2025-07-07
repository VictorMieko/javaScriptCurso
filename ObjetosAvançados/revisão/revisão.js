//Objeto declarção literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(pessoa.nome);

const chave = 'sobrenome';
console.log(pessoa[chave]);//notação de colchete util para acesso dinâmico do objeto

//declaração construtor 
const pessoa1 = new Object();
pessoa1.nome = 'Luiz 1';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 36;
console.log(pessoa1.nome);

delete pessoa1.nome;
console.log(pessoa1);

//métodos
pessoa1.falarNome = function() {
    return (`${this.sobrenome} está falando seu sobrenome`);
};
pessoa1.falarNome();

pessoa1.getNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getNascimento());

//acessa as chaves
for (let chave in pessoa1){
    console.log(chave);//console,log(pessoa1[chave]); para acessar os valores dentro das chaves
}

//factory function
function criaPessoa (nome, sobrenome, idade){
    return {
        nome, 
        sobrenome, 
        idade,
        get NomeCompleto(){
            return `${this.nome} ${this.sobrenome} ${this.idade}`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otávio', 64);
console.log(p1.NomeCompleto)

//Constructor Function
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);//congela o objeto (não é mais possivel alterar absolutamente nada)
}
//new cria um objeto vazio e preenche com o input novo a cada objeto criado com "this"
const p2 = new Pessoa ('Armando', 'Casapo');
p2.nome = 'Outro nome';
console.log(p2);
