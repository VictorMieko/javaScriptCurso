/**
 * Object.value (retorna os valores do objeto )
 * Object.entries (retorna as chaves e os valores em um array)
 * Object.assign(des, any) (copia o objeto em um objeto vazio)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread) (copia as propiedades de um objeto e alterar sem mexer no objeto originaç)
 * 
 * //já vimos
 * Object.keys (retorna as chaves)
 * Object.frezze (congela o objeto) (não permite ser alterado)
 * Object.defineProperty (define uma propriedade)
 * Object.defineProperties (define várias propriedades)
 */

const produto = {nome: 'caneca', preco: 1.8};
const outraCoisa = {...produto, material: 'vidro'};//copia o objeto e adiciona sem alterar em nada o objeto original
const garrafa = Object.assign({}, produto, { nome: 'garrafa', material: 'metal'});
const caneca = { nome: produto.nome, preco: produto.preco };//util se precisar pegar uma propriedade

//const outraCoisa = produto;//ambas as variaveis apontam para o mesmo endereço de memoria
produto.nome = 'xícara';
produto.preco = 2.5;
outraCoisa.nome = 'copo';
console.log(produto);
console.log(outraCoisa);
console.log(garrafa);

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
