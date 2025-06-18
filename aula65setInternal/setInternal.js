function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}


//configura um intervalo de tempo para que uma função seja executada em algum momento
const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);

//configura um fim para um evento, é executado uma vez
setTimeout(function(){
    clearInterval(timer);//para a funçaõ setInterval
}, 3000);

setTimeout(function(){
    console.log('Olá Mundo!');
}, 5000);
