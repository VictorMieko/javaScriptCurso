const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function criarSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hours12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'GMT'
    });
}

iniciar.addEventListener('click', function () {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criarSegundos(segundos);
    }, 1000)
});

pausar.addEventListener('click', function () {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function () {
    clearInterval(timer);
    relogio.innerHTML = `00:00:00`;
    relogio.classList.remove('pausado');
    segundos = 0;
});
