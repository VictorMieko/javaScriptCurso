function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function escolha(evento) {
        evento.preventDefault();

        const opcao1 = form.querySelector('.palavra-um').value.trim();
        const opcao2 = form.querySelector('.palavra-dois').value.trim();

        const decisao = Math.random() < 0.5 ? opcao1 : opcao2;
        resultado.innerHTML = `<p>Palavra escolhida: ${decisao}</p>`;
    }
    form.addEventListener('submit', escolha);
}
escopo();