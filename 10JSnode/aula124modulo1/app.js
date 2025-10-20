// importar modulo
// importa o modulo inteiro
const mod1 = require('./mod1');

// "importa" só uma função
//const falaNome = mod1.falaNome();

// import por desestruturação
const { Pessoa, nome, sobrenome, falaNome } = require('./mod1');

console.log(falaNome());

const p1 = new Pessoa('Luiz');
console.log(p1);

//modulo padrão do node
const path = require('path');
