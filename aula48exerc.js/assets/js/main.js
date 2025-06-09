/*FUNÇÃO LONGA E BURRA
const h1 = document.querySelector('.container h1');//classe e tag
const data = new Date();//cria variávrl data atribuindo a data atual

//função que determina dia da semana
function dayWeek(getDiaSemana) {
    let nomeDia;//variavel auxiliar

    switch (getDiaSemana) {
        case 0:
            nomeDia = `Domingo`;
            return nomeDia;
        case 1:
            nomeDia = `Segunda-Feira`;
            return nomeDia;
        case 2:
            nomeDia = `Terça-Feira`;
            return nomeDia;
        case 3:
            nomeDia = `Quarta-Feira`;
            return nomeDia;
        case 4:
            nomeDia = `Quinta-Feira`;
            return nomeDia;
        case 5:
            nomeDia = `Sexta-Feira`;
            return nomeDia;
        case 6:
            nomeDia = `Sábado`;
            return nomeDia;
    }
}
//função para determinar e retornar o nome do mês
function getMonth(getNumMes) {
    let nomeMes;//variável auxiliar

    switch (getNumMes) {
        case 0:
            nomeMes = `Janeiro`;
            return nomeMes;
        case 1:
            nomeMes = `Fevereiro`;
            return nomeMes;
        case 2:
            nomeMes = `Março`;
            return nomeMes;
        case 3:
            nomeMes = `Abril`;
            return nomeMes;
        case 4:
            nomeMes = `Maio`;
            return nomeMes;
        case 5:
            nomeMes = `Junho`;
            return nomeMes;
        case 6:
            nomeMes = `Julho`;
            return nomeMes;
        case 7:
            nomeMes = `Agosto`;
            return nomeMes;
        case 8:
            nomeMes = `Setembro`;
            return nomeMes;
        case 9:
            nomeMes = `Outubro`;
            return nomeMes;
        case 10:
            nomeMes = `Novembro`;
            return nomeMes;
        case 11:
            nomeMes = `Dezembro`;
            return nomeMes;

    }
}
//função que cria e retorna a data
function criaCalendario(data) {
    const getDiaSemana = data.getDay();
    const getNumMes = data.getMonth();

    //envia para as funções de dia da semana e mês
    const diaSemana = dayWeek(getDiaSemana);
    const numMes = getMonth(getNumMes);

    return (`${diaSemana}, ${data.getDate()} de ${numMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
}
h1.innerHTML = criaCalendario(data);
*/

//Maneira média e meio inteligente meio burra
const h1 = document.querySelector('.container h1');//classe e tag
const data = new Date();//cria variávrl data atribuindo a data atual

//função que determina dia da semana
function dayWeek(getDiaSemana) {
    let diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
    return diaSemana[getDiaSemana];
}
//função para determinar e retornar o nome do mês
function getMonth(getNumMes) {
    let nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro'];
    return nomeMes[getNumMes];
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

//função que cria e retorna a data
function criaCalendario(data) {
    const getDiaSemana = data.getDay();
    const getNumMes = data.getMonth();

    //envia para as funções de dia da semana e mês
    const diaSemana = dayWeek(getDiaSemana);
    const numMes = getMonth(getNumMes);

    return (`${diaSemana}, ${data.getDate()} de ${numMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
}
h1.innerHTML = criaCalendario(data);

/*
//FUNÇÃO CURTA E INTELIGENTE
const h1 = document.querySelector('.container h1');//classe e tag
const data = new Date();//cria variávrl data atribuindo a data atual

//função com objeto que retorna a data e hora
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/
