function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('ta errado');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// Métodos Úteis
// Promise.all Promise.race promice.resolve Promise.reject

// Promise.all => recebe um array com promises e/ou valores resolvidos
// retorna um array com todos os valores
const promises = [
    //'Primeiro valor',
    espera('Promise 1', 3000),
    espera('Promise 2', 500),
    espera('Promise 3', 1000),
    //espera(214, 1000), // se cair no erro ele rejeita todas e retorna o erro
    //'Outro valor'
];
Promise.all(promises)
    .then(valor => {
        console.log(valor);
    }).catch(e => {
        console.log(e);
    });

// Promise.race => retorna a primeira promise resolvido (ou o primeiro valor) e "termina"
Promise.race(promises)
    .then(value => {
        console.log(value + '.race');
    }).catch(e => {
        console.log(e);
    });

// Promise.resolve => já retorna a promise resolvida logo de cara
function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache.');
    } else {
        return espera('Baixei a página', 4000);
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina + '.resolve');
    })
    .catch(e => console.log(e));

// Promise.reject => retorna o erro
