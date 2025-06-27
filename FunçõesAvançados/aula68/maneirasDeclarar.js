// Declaração de função (function hoisting) somente com essa função
falaOi();

function falaOi(){
    console.log('oi');
}

//funções = First-class objects (Objeto de primeira classe)
//function expression (uma variavel recebe uma função)
const souUmDado = function(){
    console.log('Sou um dado.');
};

function executaFuncao(funcao){
    console.log('vou executar sua função abaixo');
    funcao();
}
executaFuncao(souUmDado);

//arrow function (função moderna)
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Função dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();
