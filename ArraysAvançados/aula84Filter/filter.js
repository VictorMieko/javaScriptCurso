//Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos.

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Filter recebe uma função de 'callback'
const numerosFiltro = numeros.filter(value => value > 10);//arrow function que recebe o valor do array e "retorna" valores maiores que 10
console.log(numerosFiltro);

//retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
//retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

//Retorne as pessoas com mais de 50 anos
const pessoasComMais50Anos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMais50Anos);

//Retorne as pessoas cujo nome termina com a
const pessoasComANoFinal = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));//converte para minúsculo e checa a última letra
console.log(pessoasComANoFinal);
