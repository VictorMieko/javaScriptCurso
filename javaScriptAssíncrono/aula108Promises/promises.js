// Promises => Usado quando não sabemos quando determinado valor será "entregue"

function rand(min, max) {
    min *= 1000; // já converte para segundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    // construtor que recebe uma função
    // obrigatóriamente tem que ou resolver ou rejeitar a promise
    return new Promise((resolve, reject) => { // recebe dois parâmetros (funções chamadas dependendo do código)
        if(typeof msg !== 'string') {
            reject('Bad value'); // retorna erros
            return;
        }
        setTimeout(() => {
            resolve(msg); // parâmetro unico que é enviado para o "then"
        }, tempo);
    });
}
espera('frase 1', rand(1, 3))
    .then(resposta => { // "then" é chamado depois que o resolve é executado com o parâmetro enviado pelo "resolve" (aceita até 2 argumentos)
        console.log(resposta);
        return espera('frase 2', rand(1, 3)); // encaminha para o próximo "then"
    }).then(resposta => {
        console.log(resposta);
        return espera('frase 3', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Sou o último sem nenhum parâmetro.');
    }).catch(e => { // chamada quando reject é executada
        console.log('ERROR', e);
    });

// Métodos Úteis
// Promise.all Promise.race promice.resolve Promise.reject

// Promise.all => recebe um array com promises e/ou valores resolvidos
const promises = [
    'Primeiro valor',
    espera('Promise 1', 3000),
    espera('Promise 2', 500),
    espera('Promise 3', 1000),
    'Outro valor'
];
Promise.all(promises)
    .then(valor => {
        console.log(valor);
    }).catch(e => {
        console.log(e);
    });
