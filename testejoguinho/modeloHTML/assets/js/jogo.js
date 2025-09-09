const jogadorDataString = localStorage.getItem('jogadorData');

if (!jogadorDataString) {
    alert('Nenhum personagem encontrado! Por favor crie um novo herói para começar.');
    window.location.href = 'index.html';
}

const jogadorData = JSON.parse(jogadorDataString);

class Boneco {
    constructor(nome, vida, dano) {
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
    }

    atacar(alvo) {
        alvo.receberDano(this.dano);
        return `${this.nome} ataca ${alvo.nome} e causa ${this.dano} de dano.`;
    }

    receberDano(quantidade) {
        this.vida -= quantidade;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }

    estaVivo() {
        return this.vida > 0;
    }
}
class Personagem extends Boneco {
    constructor(nome, vida, dano) {
        super(nome, vida, dano);
    }
}

class Inimigo extends Boneco {
    constructor(nome, vida, dano) {
        super(nome, vida, dano);
    }
}

const listaInimigos = [
    { nome: 'goblin', vida: 30, dano: 5 },
    { nome: 'Lobo raivoso', vida: 20, dano: 7 },
    { nome: 'Agua viva elétrica', vida: 15, dano: 14 }
]

let grupoInimigo = [];
function geraGrupoInimigo() {
    const inimigoAleatorio = Math.floor(Math.random() * listaInimigos.length);
    const animigoFinal = listaInimigos[inimigoAleatorio];

    const numeroInimigo = Math.floor(Math.random() * 3) + 1;

    grupoInimigo = [];
    console.log(grupoInimigo.length);
    for (let i = 0; i < numeroInimigo; i++) {
        grupoInimigo.push(new Inimigo(
            animigoFinal.nome,
            animigoFinal.vida,
            animigoFinal.dano
        ));
    }
    console.log(grupoInimigo.length);
}

// --- CRIAÇÃO DO JOGADOR E INIMIGOS ---
const jogador = new Personagem(jogadorData.nome, jogadorData.vida, jogadorData.dano);
// Adicionando as propriedades extras que não fazem parte do 'molde' base
jogador.raca = jogadorData.raca;
jogador.classe = jogadorData.classe;
jogador.xp = jogadorData.xp;

let inimigo;

// --- ELEMENTOS DA PÁGINA ---
const playerNameSpan = document.getElementById('player-name');
const playerRaceSpan = document.getElementById('player-race');
const playerClassSpan = document.getElementById('player-class');
const playerHpSpan = document.getElementById('player-hp');
const playerDamageSpan = document.getElementById('player-damage');
const playerXpSpan = document.getElementById('player-xp');
const textDisplay = document.getElementById('text-display');
const actionsContainer = document.getElementById('actions-container');

// --- CENAS DO JOGO ---
const cenas = {
    inicio: {
        texto: `Você, ${jogador.nome}, está na entrada da Caverna dos Ecos Perdidos. O ar é frio e um som gutural ecoa das profundezas. O que você faz?`,
        acoes: [
            { texto: "Entrar na caverna", proximaCena: "encontroAleatorio" },
            { texto: "Hesitar e ir embora", proximaCena: "fimCovarde" }
        ]
    },
    encontroAleatorio: {
        texto: "",
        isBatalha: true,
        setup: () => {
            geraGrupoInimigo();
            const nomesInimigos = grupoInimigo.map(inimigo => inimigo.nome).join(', ');
            cenas.encontroAleatorio.texto = `De repente, um grupo de inimigos surge das sombras: ${nomesInimigos}!`;
        },
        acoes: [
            { texto: "Lutar!", acao: turnoDeBatalha }
        ]
    },
    vitoria: {
        texto: "O inimigo foi derrotado! Você pisa sobre o corpo e segue adiante, mais confiante. Você ganhou 25 XP.",
        setup: () => {
            jogador.xp += 25;
        },
        acoes: [
            { texto: "Continuar explorando", proximaCena: "encontroGoblin" } // Loop para demonstração
        ]
    },
    derrota: {
        texto: "Suas forças se esvaem e você cai no chão frio da caverna... Sua jornada termina aqui.",
        acoes: [
            { texto: "Tentar Novamente", acao: () => window.location.href = 'index.html' }
        ]
    },
    fimCovarde: {
        texto: "Você decide que a prudência é a melhor parte do valor e retorna para a segurança da luz do dia. Talvez a aventura não seja para você.",
        acoes: [
            { texto: "Criar outro personagem", acao: () => window.location.href = 'index.html' }
        ]
    }
};

// --- FUNÇÕES PRINCIPAIS DO JOGO ---
function iniciarJogo() {
    mostrarCena('inicio');
}

function mostrarCena(idCena) {
    const cenaAtual = cenas[idCena];
    if (cenaAtual.setup) cenaAtual.setup();

    textDisplay.innerHTML = `<p>${cenaAtual.texto}</p>`;
    actionsContainer.innerHTML = ''; // Limpa botões antigos

    if (cenaAtual.isBatalha) {
        textDisplay.innerHTML = `<h3>Inimigos:</h3><ul>`;
        grupoInimigo.forEach(inimigo => {
            textDisplay.innerHTML += `<li>${inimigo.nome} - vida: ${inimigo.vida}</li>`;
        });
        textDisplay.innerHTML += `</ul>`;

        grupoInimigo.forEach(inimigo => {
            const botaoAtaque = document.createElement('button');
            botaoAtaque.innerHTML = `Atacar`;
            botaoAtaque.onclick = () => turnoDeBatalha(inimigo);
            actionsContainer.appendChild(botaoAtaque);
        });
    } else {
        cenaAtual.acoes.forEach(acao => {
            const button = document.createElement('button');
            button.innerText = acao.texto;
            button.onclick = () => {
                if (acao.proximaCena) mostrarCena(acao.proximaCena);
                else if (acao.acao) acao.acao();
            };
            actionsContainer.appendChild(button);
        });
        atualizarStatus();
    }
}

function turnoDeBatalha(alvo) {
    let logBatalha = "";
    
    if (jogador.estaVivo() && alvo.estaVivo()) {
        logBatalha += jogador.atacar(alvo);
    }

    grupoInimigo = grupoInimigo.filter(inimigo => inimigo.estaVivo());
    textDisplay.innerHTML += `<p>${logBatalha}</p>`;

    if (grupoInimigo.length === 0) {
        setTimeout(() => mostrarCena('vitoria'), 3000);
        return;
    }

    logBatalha += `<br>--- Turno Inimigo ---<br>`;
    textDisplay.innerHTML = `<p>${logBatalha}</p>`;

    setTimeout(() => {
        logInimigos = "";

        grupoInimigo.forEach( inimigo => {
            if(inimigo.estaVivo()){
                logInimigos += inimigo.atacar(jogador) + `<br>`
            }
        });

        textDisplay.innerHTML = `<p>${logBatalha}<br>${logInimigos}</p>`;
        atualizarStatus();

        if (!jogador.estaVivo()) {
            mostrarCena('derrota');
            return;
        }
    }, 3000);
}

function atualizarStatus() {
    playerNameSpan.textContent = jogador.nome;
    playerRaceSpan.textContent = jogador.raca;
    playerClassSpan.textContent = jogador.classe;
    playerHpSpan.textContent = jogador.vida;
    playerDamageSpan.textContent = jogador.dano;
    playerXpSpan.textContent = jogador.xp;
}
iniciarJogo();
