let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
//atribuição e desestruturação
[a, b, c] = letras;
console.log(a, b, c);

//indice   =     0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//atribuição por destruturação
//cria uma variável e pega cada elemento do array(numeros) na ordem
//...(rest) = pegar os elementos "restantes" do array
const [primeiroNumero, segundoNumero, terceiroNumero, , quintoNumero, , setimoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero, quintoNumero, setimoNumero);
console.log(resto);

//indice do array         0          1          2
//indiceElementos      0  1  2    0  1  2    0  1  2
const numeroLista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeroLista[1][2]);//mostrar o numero 6
const [, [, , seis]] = numeroLista;//destruturação(maneira complexa)
console.log(seis);
const [lista1, lista2, lista3] = numeroLista;
console.log(lista2[2]);//destruturação(meneira mais simples)
