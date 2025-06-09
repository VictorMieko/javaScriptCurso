const nome = 'João';//não pode mudar o valor da constante... obviamente.
console.log(nome);
console.log(typeof nome);//para descobrir o tipo da variavel/const

//é possivel atribuir uma const em outra const
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;  //atribuiu um valor a constante
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; //alterou o valor da variável

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(primeiroNumero + segundoNumero);
console.log(nome + segundoNumero);
console.log(typeof(nome + segundoNumero));
console.log(typeof primeiroNumero);//para descobrir o tipo da variavel/const