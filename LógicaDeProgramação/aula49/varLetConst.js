const verdadeira = true;

//let tem escopo de bloco(não pode declarar outra variável dentro do mesmo bloco)
//var tem escopo de função
/*
let nome = 'Luiz';//bloco "global"
var nome2 = 'Luiz';
*/
/*
//outro bloco
if(verdadeira){
    let nome = 'Otávio';
    console.log(nome, nome2);

    //função alinhada(outro bloco)
    if(verdadeira){
        let nome = 'outro nome';
        console.log(nome, nome2);
    }
}
*//*var nome2 = 'Otávio';//Redeclarada

console.log(nome, nome2);

if(verdadeira){
    let nome = 'Otávio';
    var nome2 = 'Outro nome';
    console.log(nome, nome2);

    //função alinhada(outro bloco)
    if(verdadeira){
        let nome = 'outro outro nome';
        var nome2 = 'mais outro nome';
        console.log(nome, nome2);
    }
}
*/

console.log(sobrenome);


//Funções e var declaradas antes das chamadas retornam como undefined


console.log(nome);

//let tem o comportamneto esperado(erro)

let nome = 'Luiz';