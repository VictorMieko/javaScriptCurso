const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
console.log(pessoa.nome);
console.log(pessoa['nome']);//util para acesso dinamico no objeto

const frutas = ['Pêra', 'Maçã', 'Uva'];
//for que lê os indices ou chaves do objeto
//usado com objetos
for (let i in frutas) {
    console.log(frutas[i]);
}

/* for que é um contador 
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
*/
