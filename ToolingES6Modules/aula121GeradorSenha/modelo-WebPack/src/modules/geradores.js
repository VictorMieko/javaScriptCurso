const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91)); // envia o codigo da tabela ascii
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;^~`/?|()+=-_*!@#$%&';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiuscula, minuscula, numero, simbolo) {
    const senhaArray = [];
    qtd = Number(qtd);

    console.log(qtd)

    for(let i = 0; i < qtd; i++) {
        if(maiuscula) senhaArray.push(geraMaiuscula());
        if(minuscula) senhaArray.push(geraMinuscula());
        if(numero) senhaArray.push(geraNumero());
        if(simbolo) senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd); // corte do 0 até o limite pedido
}
//geraSenha(10, true, true); // a cada opção dobra a quantidade de caractere
