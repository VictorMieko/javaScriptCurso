// 705.484.450-52 070.987.720-03
/**
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x
 * 10 9  8  7  6  5  4  3  2 
 * 70 0  40 28 48 20 16 15 0 = 237
 * 
 * 11 - (237 % 11) = 5 (Primeiro dígito)
 * Se o dígito for maior que 9, consideramos 0.
 * 
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
 * 11 10 9  8  7  6  5  4  3  2 
 * 77 0 45  32 56 24 20 20 0  10 = 284
 * 
 * 11 - (284 % 11) = 2 (Segundo dígito)
 */

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); // tudo que não for um número será substituido por nada
        }
    });
}
ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let contador = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (contador * Number(val));
        contador--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); // garante que retorne como string
};
ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // repete o primeiro caracter do array e repete o tamanho dele(11 vezes)
    return sequencia === this.cpfLimpo;
};

// Função que cria CPF completo aleatório
function criaCpf() {
    const cpfNovo = []; // cria um array para o cpf
    while (cpfNovo.length < 9) { // enquanto o tamanho do array do cpf for menor que nove
        let numero = Math.round(Math.random() * 9); // guarde o número aleatório na variável
        cpfNovo.push(numero); // e coloque no array
    }
    const cpfParcial = cpfNovo.join(''); // transforma o CPF em STRING
    const cpfTemp = new ValidaCPF(cpfParcial); // cria uma variável temporaria usando o CPF para utilizar os prototype do Objeto

    const digito1 = cpfTemp.criaDigito(cpfParcial); // guarda o resultado do método do prototype aqui
    const digito2 = cpfTemp.criaDigito(cpfParcial + digito1);

    return cpfParcial + digito1 + digito2; // retorna o CPF aleatório com os dois ultimos dígitos corretos
};

const cpf = new ValidaCPF('705.484.450-52'); // cpf deve ser tratado como string
let cpfValido = cpf.valida() === false ? `CPF 1: INVÁLIDO` : `CPF 1: VÁLIDO`;
console.log(cpfValido);

const cpfAleatorio = criaCpf();
console.log(cpfAleatorio);

const cpf2 = new ValidaCPF(cpfAleatorio);
cpfValido = cpf2.valida() === false ? `CPF 2: inválido` : `CPF 2: válido`;
console.log(cpfValido);
