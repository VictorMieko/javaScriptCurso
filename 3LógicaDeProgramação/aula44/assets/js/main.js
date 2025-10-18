/*MEU JEITO (JEITO BURRO)
function escopo(){
    const form = document.querySelector('.form');
    //const resultado = document.querySelector('.resultado')

    form.addEventListener('submit', function(e){//função dentro/direto no form.addEventListener
        e.preventDefault();//e de "evento"

        const peso = form.querySelector('#input-peso');
        const altura = form.querySelector('#input-altura');

        const pesoNum = Number(peso.value);
        const alturaNum = Number(altura.value);

        if(!pesoNum || !alturaNum){
            resultado.innerHTML = `<p>Por favor, preencha peso e altura corretamente.</p>`;
            return;
        }

        const IMC = pesoNum / (alturaNum ** 2);
        const IMCFormatado = IMC.toFixed(2);

        if(IMC < 18.5){
            resultado.innerHTML = `Seu IMC é ${IMC} (Abaixo do peso)`;
        }else if(IMC >= 18.5 && IMC <= 24.9){
            resultado.innerHTML = `Seu IMC é ${IMCFormatado} (Peso Normal)`;
        }else if(IMC >= 25 && IMC <= 29,9){
            resultado.innerHTML = `Seu IMC é ${IMCFormatado} (Sobrepeso)`;
        }

        function setResultado(msg){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';//limpar o html resultado
    const p = document.createElement('p');//cria um paragrafo
    p.innerHTML = 'qualquer coisa';
    resultado.appendChild(p);
}
    });
}
escopo();
*/
//JEITO CERTO(FORMA INTELIGENTE)
const form = document.querySelector('.form');//obter o formulario

form.addEventListener('submit', function (e) {//adiciona um evento de submit ao formulario
    e.preventDefault();//previne o formulario ser enviado
    const inputPeso = e.target.querySelector('#input-peso');//e = event, recebe o evento do elemento (click) 
    const inputAltura = e.target.querySelector('#input-altura');//captura dos dados do formulario

    const peso = Number(inputPeso.value);//converte o inpt para number
    const altura = Number(inputAltura.value);

    if (!peso) {//checa se o input é numero
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);//envia o input de dados para uma função de calculo de imc
    const nivelImc = getNivelImc(imc);//niveis do imc

    const msg = `Seu UMC é ${imc} (${nivelImc}).`;//mensagem criada

    setResultado(msg, true);//envia o resultado com a mensagem

});

function getNivelImc(imc) {
    //array para obter os valores dos niveis(indice)
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    //baseado no imc, de trás para frente por conta do return
    if (imc >= 39.9) return nivel[5];//para if extremamente simples (não é uma boa pratica não utilizar as chaves)
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

//função para calcular IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);//retornar o valor com 2 casas decimais
}

function criaP() {//função que cria paragrafo
    const p = document.createElement('p');
    return p;
}

//função que cria o resultado e checa se é valido
function setResultado(msg, isValid) {//isValid para css que recebe false ou true
    const resultado = document.querySelector('.resultado');//seleciona div de resultado no html
    resultado.innerHTML = '';//limpa o html para retornar a mensagem

    const p = criaP();//cria o paragrafo

    if (isValid) {//checa se a mensagem é valida
        p.classList.add('paragrafo-resultado');//cria uma classe caso true(mensagem verdadeira)
    } else {
        p.classList.add('bad');//cria uma classe caso false(mensagem falsa)
    }
    p.innerHTML = msg;//coloca a mensagem recebida ao innerHTML do paragrafo
    resultado.appendChild(p);//adiciona o paragrafo ao resultado
}
