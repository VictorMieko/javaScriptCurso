// IIFE -> Immediately invoked function expression (funções imediatas ou auto invocada).
//evita que as variáveis e funções toquem no escopo global, e bibliotecas.

(function(){//função anônima dentro de parênteses.
    console.log(568899);
})();//chamada da função.

(function(){
    const nome = 'babagi';//por ser executada imediatamente não toca o escopo global
    console.log(nome);
})();
const nome = 'rasn';//variável do escopo global

(function(idade, peso, altura){

    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome (){
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

const resultado = (function () {//IIFE dentro de variáveis só armazena o resultado dela
    const nome = 'felipe';
    return nome;
})();
console.log(resultado);

//************************************************************************************************** */

//Após ES6+ com a introdução de let e const, IIFE não realmente mais preciso
let x = 1;

{//é possível criar escopos léxicos só com parênteses (block { ... })
    let x = 2;
}
console.log(x);

/*
function qualquerCoisa(){
    console.log(43547);
}
qualquerCoisa(); // esta tocando escopo global
*/
