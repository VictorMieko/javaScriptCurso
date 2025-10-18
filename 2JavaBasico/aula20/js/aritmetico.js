//Operadores aritméticos de atribuição e incremento

const num1 = '5';
const num2 = 10;
const num3 = 2;

console.log(num1 + num2);//Concatenação = união
console.log(num3 ** num2); // ** potencialização
console.log(num2 % num3);// % resto da divisão

let contador = 1;
contador += 2; // mesma coisa que contador = contador + 2;
contador += 2; // funciona com qualquer sinal
contador += 2;
contador += 2;
console.log(contador);

const num4 = 10;
const num5 = '5';
console.log(num4 * num5);//o javaScript converteu num5 para numero sozinho

/**
 * parseInt = converte para inteiro
 * parseFloat = converte para float
 */
const num6 = 10;
const num7 = parseFloat('5.5');//converte string em Number float
console.log(num6 + num7);