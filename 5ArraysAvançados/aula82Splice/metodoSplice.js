//               -5      -4        -3         -2        -1
//                0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(indice que vc quer começar a mexer , quantos elementos remover do array);
//splice como pop
let removidos = nomes.splice(-4, Number.MAX_VALUE);//remove 'julia' do array (indice 4, 1 elemento)
//removidos = retorna o elemento removido em array
console.log(nomes, removidos);

//splice(-2, Number.MAX_VALUE) vai do indice menos 2 até o maior numero possível

const nomes1 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
nomes1.splice(3, 0, 'Luiz');//a partir do indice 3, não excluia, adicione
console.log(nomes1);

removidos = nomes1.splice(1, 2, 'Carlos', 'Henrique');//no indice 1, delete 1 elemento, e adicione 'Carlos' e 'Henrique' no lugar
console.log(nomes1, removidos);

//shift
const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
removidos = nomes2.splice(0, 1);//indice 0 remove 1 elemento igual ao shift
console.log(nomes2, removidos);

//push
nomes2.splice(nomes2.length, 0, 'Luiz', 'Otávio', 'Miranda');//tamanho do array, não remove, adiciona
console.log(nomes2);

//unshift
nomes2.splice(0, 0, 'Metaphor', 'SpaceMarine');//no inicio, não remove, adicione
console.log(nomes2);
