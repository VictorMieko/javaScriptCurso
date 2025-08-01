class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') // tudo que não for um número será substituido por nada
        });
    }

    valida() {
        if (typeof this.cpfLimpo === "undefined") return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.criaDigito(cpfParcial); // Troca o "this" pela classe para corrigir o erro
        const digito2 = ValidaCPF.criaDigito(cpfParcial + digito1); // Porque a função (antes) recebia o "this" (instância) mesmo não possuindo dentro dela

        const novoCpf = cpfParcial + digito1 + digito2;

        return novoCpf === this.cpfLimpo;
    }
    // Não possui "this", não usa nada da instância === static
    static criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);

        let contador = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (contador * Number(val));
            contador--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
    isSequencia() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo; // repete o primeiro caracter do array até o final dele(11 vezes)
    }
}
const cpf = new ValidaCPF('705.484.450-52');
let cpfValido = cpf.valida() === false ? `CPF 1: INVÁLIDO` : `CPF 1: VÁLIDO`;
console.log(cpfValido);
