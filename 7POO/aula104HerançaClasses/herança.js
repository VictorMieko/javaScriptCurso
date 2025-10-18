class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false; // instância desligada
    }

    ligar() {
        if(this.ligado) { // if true
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if(!this.ligado) { // if false
            console.log(this.nome + 'já desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // classe Smartphone herda a classe DispositivoEletronico
    constructor(nome, cor, modelo) {
        super(nome); // chama o constructor da classe "Pai" para ser refeito/editado
        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('samsung', 'preto', 'S25');
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() { // método mais próximo do objeto
        console.log('Você alterou o método ligar');
    }
    falaOi() { // método privado dessa classe
        console.log(this.nome + ' falou Oi');
    }
}
const t1 = new Tablet('Tablet', true);
console.log(t1.ligado);
t1.ligar(); // busca o método mais próximo do objeto
t1.falaOi();
