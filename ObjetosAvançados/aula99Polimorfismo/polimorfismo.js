// Polimorfismo = métodos se comportar como subclasses (função construtora)

// Superclasse (considerada em Programação orientada a objeto)
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Agencia/conta: ${this.agencia}/${this.conta} | Saldo R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
console.log();
const CC = new ContaCorrente(11, 22, 0, 100);
CC.depositar(10);
CC.sacar(110);
CC.sacar(1);

function ContaPolpanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPolpanca.prototype = Object.create(Conta.prototype);
ContaPolpanca.prototype.constructor = ContaPolpanca;

console.log();
const CP = new ContaPolpanca(12, 13, 0)
CP.depositar(10);
CP.sacar(110);
CP.sacar(1);
