/**
 * && -> AND 
 * || -> OR
 * 
 * Numeros avaliados em FALSY(false value):
 *      false
 *      0
 *      (string vazia) = '' "" ``
 *      null / undefined
 *      NaN(Not a Number)
 */

//ao usar AND e encontra um valor negativo, ele retorna o valor falso
//se não encontra nada false ele checa todas as expressões e retorna a ultima
console.log('luiz otavio' && 0 && 'maria');
console.log('luiz otavio' && 1 && 'maria');
console.log('luiz' && '' && 'maria');
console.log('luiz' && null && 'maria');

function falaOi(){
    return 'Oi';
}
//precisa fazer uma checagem para executar ou não
const vaiExecutar = true;//variavel que controle se vai ou não executar
console.log(vaiExecutar && falaOi());

//se o usuario não escolher uma cor (false) retorna cor padrão
const corUsuario = null;//escolha do usuario
const corPadrao = corUsuario || 'preto';//bom para "substituir" if/else

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;
console.log(a || b || c || d || e);//retorna false (qual deles???????XD)