//Função construtura retorna objetos -> Pessoa (new)
//Função fabrica retorna objetos -> criaPessoa

//Função construtora
function Pessoa (nome, sobrenome) {
    //atributos/métodos privados
    const ID = 123456;
    const metodoInterno = () =>{};

    //this = atributos/métodos públicos
    this.nome = nome,
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método');
    };
}

//new cria um objeto vazio, aponta o this para o objeto vazio e retorna ele para a variável
const p1 = new Pessoa ('Luiz', 'Otávio');
const p2 = new Pessoa ('Maria', 'Oliveira');

console.log(p1.nome);
p2.metodo();
