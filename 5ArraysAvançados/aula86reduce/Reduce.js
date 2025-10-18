//Reduce reduz o array a 1 elemento

//Some todos os números (Reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Some todos os números (Reduce) (proposito original)
const total = numeros.reduce(function(acumulador, value, index, array){
    acumulador += value;
    console.log(acumulador)
    return acumulador;
}, 0);//valor inicial para o acumulador ou o valor inicial do array
console.log(total);

//Retorne um array com os pares (Filter)
const totalPares = numeros.reduce(function (acumulador, value) {
    if (value % 2 === 0) acumulador.push(value);
    return acumulador;
}, []);//acumulador se torna um array
console.log(totalPares);

//Retorne um array com o dobro dos valores (map)
const totalDobro = numeros.reduce(function(acumulador, value){
    acumulador.push(value * 2);
    return acumulador;
}, []);
console.log(totalDobro);

//retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },//acumulador
    { nome: 'Maria', idade: 23 },//value
    { nome: 'Eduardo', idade: 55 },//acumulador
    { nome: 'Letícia', idade: 19 },//value
    { nome: 'Rosana', idade: 32 },//acumulador
    { nome: 'Wallace', idade: 74 },//value...
];

//retorne a pessoa mais velha
//acumulador é o primeiro array e o value é o segundo array e assim em diante
const pessoaVelha = pessoas.reduce(function(acumulador, value){
    if(acumulador.idade > value.idade) return acumulador;
    return value;
}, 0);
console.log(pessoaVelha);
