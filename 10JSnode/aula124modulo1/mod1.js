const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;
console.log(module);

// exporta a chave nome como nome para ser importado em outro modulo
//module.exports.nome = nome;
//exports.sobrenome = sobrenome; // abreviação
//exports.falaNome = falaNome;

// this. aponta para exports
this.qualquerCoisa = 'o que eu quiser exportar';

console.log(exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
//exports.Pessoa = Pessoa;

module.exports = { Pessoa, nome, sobrenome, falaNome};
