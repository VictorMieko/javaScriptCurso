const nome = "Luiz";
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome;
    }
}

// npx babel (nome do arquivo que vai ser convertido) -o (nome do arquivo convertido) --presets=@babel/env
// npx babel main.js -o bundle.js --presets=@babel/env

//npm run babel => para rodar o babel automaticamente
// crtl + c para parar
