//const iniciar = document.querySelector('.iniciar'); Não são mais necessários por já estarem sendo selecionados no document listener
//const pausar = document.querySelector('.pausar');
//const zerar = document.querySelector('.zerar');

//função que envolve tudo impedindo que as variáveis toquem o escopo global
function cronometro() {
    const relogio = document.querySelector('.relogio');
    const barra = document.querySelector('.minha-barra');


    let segundos = 0;
    let timer;//variável para guardar o setInterval
    let h2;
    let corIntervalo;
    let moverBarra;

    function criarSegundos(segundos) {
        const data = new Date(segundos * 1000);// * 1000 para segundos                     
        return data.toLocaleTimeString('pt-BR', {
            hours12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'GMT'
        });
    }

    function criaH2() {
        const h2 = document.createElement('h2');
        h2.innerHTML = `PAUSADO`;
        return h2;
    }

    //Melhor forma performatica para eventos de 'click'
    document.addEventListener('click', function (e) {
        const elemento = e.target;//guarda o target do evento clicado no html 

        if (elemento.classList.contains('iniciar')) {//se elemento conter a classList('iniciar) faça

            if (h2) {//se tiver faça (se não tiver ele só começa a contar depois de remover o h2)
                h2.remove();
                h2.innerHTML = null;
            }

            clearInterval(timer);//garante que não há mais de um timer rodando
            timer = setInterval(function () {
                segundos++;
                relogio.innerHTML = criarSegundos(segundos);
                relogio.classList.remove('pausado');

                moverBarra = (segundos % 60) * (100 / 60);
                barra.style.height = moverBarra + '%';
            }, 1000)

            //Para a mudança de cor continuar tem que mudar a função mas eu to com preguiça
        }

        if (elemento.classList.contains('pausar')) {

            //if (segundos === 0) return false;

            clearInterval(timer);
            clearInterval(corIntervalo);
            relogio.classList.add('pausado');//tem nada a ver com o texto 'pausado'

            //if(!h2Pausado){
            h2 = criaH2();
            relogio.insertAdjacentElement('afterend', h2);
            //}
        }

        if (elemento.classList.contains('zerar')) {
            if (h2) {
                h2.remove();
                h2 = null;
            }

            clearInterval(timer);//se não tiver ele reseta mas não pausa
            relogio.innerHTML = `00:00:00`;
            relogio.classList.remove('pausado');
            segundos = 0;

            moverBarra = 0;
            barra.style.height = 0 + '%'

        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        corIntervalo = setInterval(function () {
            let body = document.body;
            body.style.backgroundColor = body.style.backgroundColor === 'yellow' ? 'pink' : 'yellow';
        }, 500);
    });

    document.addEventListener('DOMContentLoaded', moverBarra());
}
cronometro();

/*
function moverBarra(){
    const barra = document.querySelector('.minha-barra');

    let height = 0;
    crementarBarra = setInterval(function(){
        if(height == 100){
            clearInterval(crementarBarra);
        }else{
            height++;
            barra.style.height = height + '%';
        }
    }, 10)
}
*/
