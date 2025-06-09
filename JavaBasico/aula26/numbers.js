let num1 = 1;//number
let num2 = 2.5;//number
num1 = num1.toString();//converte number para string
console.log(num1 + num2);

let num3 = 1500;
console.log(num3.toString(2));//pode converter o numero para qualquer casa decimal

let num4 = 10.93652983652;
console.log(num4.toFixed(3));//numero de casas decimais que aparecerão

let num5 = 10;
console.log(Number.isInteger(num5));//retorna se o numero é inteiro ou não true = inteiro, false = quebrado

let temp = num5 * 'Ola';
console.log(Number.isNaN(temp));//retorna se a conta deu errado (Nan) true
temp = num5 * num1;
console.log(Number.isNaN(temp));//false

//Padrão para precisão do javascript = IEEE 754-2008
let num6 = 0.7;
let num7 = 0.1;
num6 += num7;
num6 += num7;
num6 += num7;
console.log(num6);//problema de imprecisão
console.log(Number.isInteger(num6));

num6 = parseFloat(num6.toFixed(2));//corrige o problema de imprecisão da forma correta ou (num6 = Number(num6.toFixed(2)))
console.log(num6);
console.log(Number.isInteger(num6));

/*
let num8 = 0.7;
let num9 = 0.1;
num8 = ((num8 * 100) + (num9 * 100)) / 100;
console.log(num8);
*/