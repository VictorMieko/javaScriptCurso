//Alert, Confirm e prompt
/**
 * funções no console do navegador
 * alert = mensagem que não retorna um valor
 * confirm = mensagem que retorna true ou false
 * prompt = retorna o que o usuario escreve
 */

let num1 = prompt("Digite um numero");
let num2 = prompt("Digite um numero");

num1 = Number(num1);
num2 = Number(num2);

const res = num1 + num2;
alert(`O resultado da soma é: ${res}`);
alert(`O resultado da soma é: ${num1 + num2}`);//com templates é possivel fazer a conta direito