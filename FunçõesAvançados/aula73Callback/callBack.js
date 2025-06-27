//Funções de callback são chamados para executar e controlar funções em uma ordem especifica lidando com operações assíncronas de forma mais eficiente.

//função que cria numero aleatório
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {//recebe uma função callback
    setTimeout(function () {//executa a partir do numero aleatorio recebido
        console.log('f1');
        if (callback) callback();//se existir callback, executa
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(f1Callback);//chama callback de f1

function f1Callback() {//ao chamar, chama callback de f2
    f2(f2callback);
}

function f2callback() {//etc etc
    f3(f3callback);
}

function f3callback() {
    console.log('Olá mundo!');
}
