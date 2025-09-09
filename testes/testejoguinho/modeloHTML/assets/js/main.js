const nomeInput = document.getElementById('nome-do-personagem');
const racaInput = document.getElementById('raca-do-personagem');
const comecarJogoBtn = document.getElementById('comecar-jogo-btn');

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        mostraClasse(el);
    }
    if(el.id === 'comecar-jogo-btn') {
        e.preventDefault();
        comecarJogo();
    }
});

async function mostraClasse(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('Nosso ERRO 404');

        const html = await response.text();
        loadResult(html);
    } catch (e) {
        console.error(e);
    }
}

function loadResult(response) {
    const mostrarClasse = document.querySelector('.mostrar-classe');
    mostrarClasse.innerHTML = response;
}

const classes = {
    guerreiro: { nome: 'guerreiro', vida: 120, dano: 12 },
    mago: { nome: 'mago', vida: 80, dano: 18}
};

function comecarJogo() {
    const classeJogador = document.querySelector('input[name="escolher-classe"]:checked').value;
    const stats = classes[classeJogador];

    const jogador = {
        nome: nomeInput.value,
        raca: racaInput.value,
        classe: stats.nome,
        vida: stats.vida,
        dano: stats.dano,
        xp: 0
    };

    try {
        localStorage.setItem('jogadorData', JSON.stringify(jogador));
        window.location.href = "aventura.html";
    } catch(e) {
        console.error("Erro ao salvar dados no localStorage:", e);
        alert("Deu errado.");
    }
};
