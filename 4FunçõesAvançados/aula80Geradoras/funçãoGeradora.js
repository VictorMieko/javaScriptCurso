//Lazy Avaliation = não te entrega todos os valores
//ela "pausa" o código em um local

function* geradora1() {
    yield 'Valor 1';//yield = return para as funções geradoras
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1);
//console.log(g1.next().value);//retorna e pausa no primeiro yield
//console.log(g1.next().value);//quando requisitado retorna e pausa o proximo yields

for (let valor of g1) {
    console.log(valor);
}

//gerador de contador infinito
function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

function* geradora5() {
    yield function(){
        console.log('Vim do yield 1');
    };

    /*
    return function() {//retorna e termina a geradora
        console.log('Vim do return');
    }
        */
    // Código ...

    yield function() {
        console.log('Vim do yield 2');
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
