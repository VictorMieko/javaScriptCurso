function saudacao(nome){//declaração classica
    return (`bom dia ${nome}`);//ao encontrar "return" o codigo termina a função e devolver algum valor
    console.log('Ola função');//não será executado
}
const variavel = saudacao('você');
console.log(variavel);
/*
const salve = function(nome){
    return (`bom dia ${nome}`);
};
console.log(salve('roberto'));
*/
function soma(x = 0, y = 0){//x e y com valres 'padrões' para quando não teiver parâmetros
    const resultado = x + y;
    return resultado;//não é possivel utlizar a variavel dentro de uma função
}
console.log(soma());
console.log(soma(2, 5));
console.log(soma(2, 90));

const resultado = soma(7, 4);
console.log(resultado);

const raiz = function(x){//função anônima (função salva numa variável)
    return x ** 0.5;
};//precisa de ;
console.log(`Raiz quadrada: ${raiz(9)}`);
console.log(`Raiz quadrada: ${raiz(16)}`);
console.log(`Raiz quadrada: ${raiz(25)}`);

const multiplicacao = x => x * 5;//arrow function, função moderna, usada para parâmetros simples, quando tem 1 parâmetro não precisa de parenteses
console.log(`Multiplicação: ${multiplicacao(4)}`);