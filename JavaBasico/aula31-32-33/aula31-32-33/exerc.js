function meuEscopo() {
    //selecionar o formulario
    const form = document.querySelector('.form');//seleciona os elementos por qualquer identificador (name, class, id, etc)
    const resultado = document.querySelector('.resultado');

    /*
    //evento para adicionar """espiões""" na pagina
    form.onsubmit = function(evento){//quando o formulario for enviado
        event.preventDefault();//neste evento previne o comportamento padrão (enviar o fomulário)
        alert(1);
        console.log('foi enviado');
    };
    */

    /*
    let contador = 1;
    function recebeEventoForm(evento){//maneira moderna
        evento.preventDefault();
        console.log(`form não enviado ${contador}`);
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm);//escutador de evento recebendo submit
    */
    const pessoas = [];//array

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //cria o objeto dentro do array colocando ele com push
        pessoas.push({
            nome: nome.value,//value para capturar o input do teclado
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();