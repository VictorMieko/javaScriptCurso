function Nave(tipo, disparos, velocidade) {
    this.tipo = tipo;
    this.disparos = disparos;

    Object.defineProperty(this, 'velocidade', {
        enumerable: true,
        configurable: true,
        get: function() {
            return velocidade;
        },
        set: function(value) {
            if(typeof value !== 'number') return `A velocidade deve ser em números`;
            velocidade = value;
        }
    });
}
Nave.prototype.mach = function (){
    if(this.velocidade < 1235) return console.log(`Abaixo da velocidade do som`);
    if(this.velocidade >= 1235) return console.log(`Acima ou igual a velocidade do som`);
};
Nave.prototype.disparar = function() {
        if(this.disparos > 0) this.disparos--;
};
const nave = new Nave('alienigena', 5, 4554);
console.log(nave);
nave.mach();
nave.disparar();
nave.disparar();
console.log(nave);
