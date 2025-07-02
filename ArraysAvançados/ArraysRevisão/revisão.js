//indices   =      0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
const nome = new Array('Jorge', 'Mariana', 'João');//construtor padrão
const novo = [...nomes];//faz uma cópia, um não altera o outro

const removido = novo.pop();//remove o ultimo elemento e guarda em uma variável
const removido2 = novo.shift();//remove o primeiro elemento e guarda em uma variável
nomes.push('Carlos');//adiciona no final do array
nomes.unshift('Roberto');//adiciona no inicio do array e desloca todos os elementos (ineficiente para arrays grandes)
const novo2 = nomes.slice(1, 3);//indice inicial que tu quer e indice final que tu quer

console.log(novo2);
console.log(nomes);
console.log(removido2, novo, removido);

nomes[2] = 'João';//altera o indice 2
delete nomes[2];//remove um elemento do array sem alterar os indices.
console.log(nome);
console.log(nomes.length);//elementos e não indice

const nomenome = 'Luiz Otávio Miranda';
const nomenomes = nomenome.split(' ');//separa uma string em um array
const nomesnomes = [ 'Luiz', 'Otávio', 'Miranda' ];
console.log(nomenomes);
