const { dirname } = require('path');
const multiplicacao = require('./mod2');

console.log(multiplicacao(2, 3));

// caminhos
const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));

console.log(__filename); // caminho arquivo atual desde a raiz
console.log(__dirname); // caminho da pasta atual desde a raiz
