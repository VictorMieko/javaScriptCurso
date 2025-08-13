// Usados para limpar mais as promises

function rand(min = 0, max = 3) {
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

async function executa() {
    try {
        const fase1 = await espera('fase 1', rand()); // espera uma promise ser finzalizada
        console.log(fase1 + ' async');

        const fase2 = await espera('fase 2', rand());
        console.log(fase2 + ' async');

        const fase3 = await espera('fase 3', rand());
        console.log('terminamos na fase 3:', fase3 + ' async')
    } catch (e) {
        console.log(e);
    }
}
executa();

/*
espera('fase 1', rand())
    .then(value => {
        console.log(value);
        return espera('fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return espera('fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
    })
    .catch(e => console.log(e));
    */
