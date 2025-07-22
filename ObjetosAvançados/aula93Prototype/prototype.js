/**
 * JavaScript é baseado em protótipos para passar propriedades e métodos
 * de um objeto para outro.
 * Prototype é a base da programção orientada a objetos no JavaScript
 *
 * DEFINIÇÃO DE PROTÓTIPO:
 * Protótipo é o termo usado para se referir ao que foi criado pela
 * primeira vez, servindo de modelo ou molde para futuras produções.
 * 
 * Todos os objetos tem uma referência interna para um protótipo (__proto__)
 * que vem da proprieade prototype da função construtora que foi usada para
 * criá-lo. Quando tentamos acessar um membro no próprio objeto e depois a cadeia
 * de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
 */

//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original' + this.nome + ' ' + this.sobrenome; // sobreescreve o prototype
}
//cria um método para o objeto e todas as instâncias 
Pessoa.prototype.estouAqui = 'hahaha';

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

//instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.');
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);

console.log(pessoa1.nomeCompleto());

console.log(data);
