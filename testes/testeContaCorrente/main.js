class Transacao {
    constructor(tipo, valor, saldoFinal) {
        this._data = new Date();
        this.tipo = tipo;
        this.valor = valor;
        this.saldoFinal = saldoFinal;

        Object.defineProperty(this, 'data', {
            enumerable: true,
            configurable: false,
            get: () => {
                return this._data.toLocaleString();
            },
            set: (value) => {
                this.data = value;
            }
        })
    }

    toString() {
        return `${this.data} - ${this.tipo}: R$${this.valor} | Saldo restante: R$${this.saldoFinal}`;
    }
}

class ContaCorrente {
    constructor(banco, agencia, numero, titular, limite) {
        this.banco = banco;
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
        this.limite = limite;
        this.transacoes = [];
    }

    Depositar(valor) {
        this.saldo += valor;
        this.transacoes.push(new Transacao('Depósito', valor, this.saldo));
    }

    Sacar(valor) {
        if (valor > this.saldo + this.limite) return console.log('Saldo insuficiente.');
        if (valor <= 0) return console.log('Valor insuficiente para saque.');

        this.saldo -= valor;
        this.transacoes.push(new Transacao('Saque', valor, this.saldo));
    }

    Extrato() {
        console.log(`\n--- Extrato da conta ${this.numero} ---`);
        this.transacoes.forEach(transacao => console.log(transacao.toString()));
        console.log(`\nSaldo disponível: R$${this.saldo}\n`);
    }
}

const conta = new ContaCorrente("Banco Central", "1234", "56789", "Maria Silva", 500);
conta.Depositar(1000);
conta.Sacar(300);
conta.Sacar(1500);
conta.Extrato();
