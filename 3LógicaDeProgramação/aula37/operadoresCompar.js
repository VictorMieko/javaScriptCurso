/*
Operadores de comparaçâo
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (compara valor) não é recomendado a usar
=== igualdade estrita (compara valor e tipo)
!= diferente (compara valor) não é recomendado a usar
!== diferente estrito(comapra valor e tipo)
*/
const num1 = 10;
const num2 = '10';
const comp1 = num1 == num2;//mesmo comparando um number e string retorna como true(resultado errado)
console.log(comp1);

const num3 = 10;
const num4 = 10;
const comp2 = num3 === num4;//ao comparar o valor, também compara o tipo, evitando erros futuros
console.log(comp2);
//O mesmo acontace com !=(errado) e !==(correto)