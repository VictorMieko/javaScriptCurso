//factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        },
        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },

        fala(assunto) {//function
            return `${this.nome} está falando ${assunto}.`;
        },

        altura: altura,
        peso: peso,
        //get = finge que é uma string
        get imc() {//metodo que calcula o imc de uma pessoa em especifico
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);//this se refere ao objeto que está chamando ele
console.log(p1.imc);
console.log(p1.sobrenome);
console.log(p1.fala(`sobre algo`));

const p2 = criaPessoa('Ziul', 'OivátO', 8.1, 8);
console.log(p2.imc);
console.log(p2.sobrenome);
console.log(p2.fala(`ogla erbos`));

const p3 = criaPessoa('Maria', 'Mariana', 1.8, 80);
