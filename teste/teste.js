function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function escolha(e) {
        e.preventDefault();

        const mensagem = form.querySelector('.mensagem');
        const opcoes = [];

        mensagem.forEach(opcao => {
            const texto = opcao.value.trim();
            if(texto){
                opcoes.push(texto);
            }
        });
        
        if(opcoes.length === 0){
            resultado.innerHTML = `<p>Insira pelo menos uma opção.</p>`;
            return;
        }else{
            const decisao = mensagem[Math.floor(Math.random() * opcoes.length)];
            resultado.innerHTML = `<p>Palavra escolhida: ${decisao}</p>`;
        }
    }
    form.addEventListener('submit', escolha);
}
escopo();
