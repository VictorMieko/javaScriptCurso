let num1 = 9.84753;
let num2 = Math.floor(num1);//arredonda para baixo
console.log(num2);

num2 = Math.ceil(num1);//arredonda para cima
console.log(num2);

num2 = Math.round(num1);//arredonda para o numero mais proximo (pra cima ou pra baixo)
console.log(num2);

console.log(Math.max(1,54,64,23,9,32,6,1234));//pega o maior numero
console.log(Math.min(1,54,64,-23,9,32,6,1234));//pega o menor numero

console.log(Math.random());//gera um numero aleatorio com varias casas decimais

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);//gera um numero aleatorio entre 10 e 5, sem as casas decimais
console.log(aleatorio);

console.log(Math.pow(2, 10));//eleva o numero pelo outro
console.log(2 ** 10);// mesma coisa só que mais simples

let num3 = 9;
console.log(num3 ** (1/2));//raiz quadrada
console.log(num3 ** 0.5);//raiz quadrada de uma forma mais direta

console.log(100 / 0);//é possivel dividir por zero, retorna como verdadeiro e não dá erro
console.log(!!(100 / 0));