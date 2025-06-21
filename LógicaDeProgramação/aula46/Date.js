//Cria um objeto de data e hora
//date(0) = dec 31 1969 20:00 timestamp unix (marco zero)
/*
const quatroHoras = 60 * 60 * 4 * 1000;//4 horas
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + quatroHoras + umDia);//função construtora(sempre começa com letra maiuscula)
*/

//const data = new Date(2019, 3, 20, 14, 14, 27);//ano, mes, dia, hora, minutos, segundos, milessimos

/*
const data = new Date('2019-04-20 20:15:59:500');//por string
console.log('Dia', data.getDate());//obtem o numero do dia
console.log('Mês', data.getMonth() + 1);//obtem o numero do mês(javascript começa pelo 0)
console.log('Ano', data.getFullYear());//obtem o numero do ano
console.log('Hora', data.getHours());//obtem o numero da hora
console.log('Min', data.getMinutes());//obtem o numero dos minutos
console.log('Seg', data.getSeconds());//obtem o numero dos segundos
console.log('Ms', data.getMilliseconds());//obtem o numero dos milessimos
console.log('Dia da semana', data.getDay());//obtem o numero do dia da semana// 0 = Domingo, 6 = Sábado

console.log(data.toString());//mostra a data em formato ingles

console.log(Date.now());//vai do marco zero até hoje em milessimos de segundos
*/

//função para adicionar um zero a data
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;//se o numero não for maior que 10, retornar 0 + numero
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${ano}/${mes}/${dia} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
