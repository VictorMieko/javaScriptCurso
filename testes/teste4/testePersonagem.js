function Boneco(raca, defesa, ataque, vida) {
    this.raca = raca;
    this.vida = vida;
    this.defesa = defesa;

    Object.defineProperty(this, 'ataque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return ataque;
        },
        set: function(value) {
            if(typeof ataque !== 'number') return `Os pontes de ataque devem ser em números.`;
            ataque = value;
        }
    });
};
Boneco.prototype.mostrarVida = function() {
    if(this.vida <= 0) return console.log(`Morreu :(`);

    console.log(`Sua vida: ${this.vida};`);
};
Boneco.prototype.defender = function(dano) {
    if(typeof dano !== 'number') return console.log('O dano deve ser em números.');
    if(dano >= this.vida){
        this.vida -= dano;
        this.mostrarVida();
        return;
    }

    const danoFinal = this.defesa - dano;
    console.log(`Você recebeu ${danoFinal} de Dano.`);

    this.vida -= danoFinal;
    this.mostrarVida();
}
Boneco.prototype.atacar = function() {
    console.log(`Você deu ${this.ataque} de Dano.`);;
}

function Humano(raca, defesa, ataque) {
    Boneco.call(this, raca, defesa, ataque);
}
Humano.prototype = Object.create(Boneco.prototype);
Humano.prototype.constructor = Humano;

Humano.prototype.atirar = function() {
    const danoTiro = this.ataque + 10;
    console.log(`Seu tiro deu ${danoTiro} de Dano.`);
};

const soldado = new Humano('humano', 10, 10);
console.log(soldado);

function Inimigo(raca, defesa, ataque, vida, elemento) {
    Boneco.call(this, raca, defesa, ataque, vida);
    
    Object.defineProperty(this, 'elemento', {
        enumerable: true,
        configurable: false,
        get: function() {
            return elemento;
        },
        set: function (value){
            if(typeof elemento !== 'number') return `O elemento é o dano adicional ao dano, informe em numeros.`;
            elemento = value;
        }
    });
}
Inimigo.prototype = Object.create(Boneco.prototype);
Inimigo.prototype.constructor = Inimigo;

Inimigo.prototype.cuspirAcido = function() {
    const danoAcido = this.ataque + this.elemento;
    console.log(`O dano foi de ${danoAcido}. (${this.ataque} + ${this.elemento})`);
};

const monstro = new Inimigo('aranha', 5, 5, 5, 2);
console.log(monstro);
monstro.defender(5);
