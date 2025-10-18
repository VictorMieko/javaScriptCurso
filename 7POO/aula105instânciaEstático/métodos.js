// Métodos estáticos podem ser acessados na classe sem instância-la

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instâncias (as instâncias tem acesso)
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // )
    static trocaPilha() { // só é acessivel pelo classe
        console.log('Vou trocar');
    }
}
const c1 = new ControleRemoto('LG');
console.log(c1);
c1.aumentarVolume();
console.log(c1);

//c1.trocaPilha(); // Não é possível acessar pelo objeto
ControleRemoto.trocaPilha(); // acesso somente pela classe
