// maneira mais simples de exportar (exportar o nome das variáveis, funcões, etc)
// tambem é possivel mudar o nome na exportação
// na importação o nome deve ser o novo
// export { nome, sobrenome as sobrenome2, idade, soma };

// forma mais comum 
export const nome = 'Luiz'; // exporta e cria
export const sobrenome = "Miranda";
export const idade = 30;

export default function soma(x, y) { // default só pode um por modulo
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// alternativa para variavel default
// export { nome as default, sobrenome, idade, soma }
