class Boneco {
    constructor(nome, vida, dano) {
        this.nome = nome,
        this.vida = vida,
        this.dano = dano
    }
    atacar(alvo) {
        alvo.receberDano(this.dano);
        this.turno = false;
    }

    receberDano(dano) {
        this.vida -= dano;
    }
}

class Personagem extends Boneco{
    constructor(nome, vida, dano, raca) {
        super(nome, vida, dano);
        this.raca = raca;
        this.turno = true;
    }
}

class Inimigo extends Boneco{
    constructor(nome, vida, dano) {
        super(nome, vida, dano);
        this.turno = false;
    }
}
const listaInimigos = [
    { nome: 'goblin', vida: 30, dano: 5 },
    { nome: 'Lobo raivoso', vida: 20, dano: 7 },
    { nome: 'Agua viva elétrica', vida: 15, dano: 14 } 
];

let grupoInimigo = [];
function geraInimigo() {

    const inimigos = Math.floor(Math.random() * listaInimigos.length);;
    const inimigoAleatorio = listaInimigos[inimigos];

    const limiteGrupo = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < limiteGrupo; i++) {
        grupoInimigo.push(new Inimigo(
            inimigoAleatorio.nome,
            inimigoAleatorio.vida,
            inimigoAleatorio.dano
        ));
    }
}

let jogador = new Personagem('Jorge', 50, 15, 'humano');
let inimigo = new Inimigo('monstro', 150, 100);

geraInimigo();

console.log(jogador);
console.log(inimigo);
controleDeTurno();
jogador.atacar(inimigo);
console.log(inimigo);
controleDeTurno();
inimigo.atacar(jogador);
console.log(jogador);
controleDeTurno();
jogador.atacar(inimigo);
console.log(inimigo);
controleDeTurno();

function controleDeTurno() {

    if(inimigo.vida <= 0) return console.log('inimigo morreu');
    if(jogador.vida <= 0) return console.log('jogador morreu');

    if(jogador.turno){
        console.log('vez do jogador.');
    }else{
        console.log('vez do bicho');
        jogador.turno = true;
    }
}
