// Usados para limpar mais as promises

function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('ta errado');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            true
            return;
        }, tempo);
    });
}

espera('fase 1', rand())
    .then(value => {
        console.log(value);
        return espera('fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return espera('fase', rand());
    });
