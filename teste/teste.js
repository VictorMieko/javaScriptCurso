function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function escolha(evento) {
        evento.preventDefault();

        const mensagem = form.querySelector('#mensagem').value.trim();
        
        if(mensagem.length === 0){
            resultado.innerHTML = `<p>Insira pelo menos uma opção.</p>`;
        }else{
            const decisao = mensagem[Math.floor(Math.random() * mensagem.length)];
            resultado.innerHTML = `<p>Palavra escolhida: ${decisao}</p>`;
        }
    }
    form.addEventListener('submit', escolha);
}
escopo();