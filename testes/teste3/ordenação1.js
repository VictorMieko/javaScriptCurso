// SORT MODIFICA O ARRAY ORIGINAL

const lista = ['Fundação', 'The Witcher O Último Desejo', 'John Scalzi'];

//strings com caracteres não-ASCII
lista.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(lista);

const lista2 = ["Delta", "alpha", "CHARLIE", "bravo"];

// array temporário que armazena os objetos com o índice e o valor para ordenação
const map = lista2.map(function (elemento, index) {
    return { index: index, value: elemento.toLowerCase() };
});

// ordenando o array mapeado contendo os dados resumidos
map.sort(function (a,b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// container para o resultado ordenado
const resultado = map.map(function (elemento) {
  return lista2[elemento.index];
});
console.log(resultado);

const listaNumeros = [1, 4, 6, 2, 9, 0];

listaNumeros.sort((a, b) => {
    return b - a;
});
console.log(listaNumeros);

const pessoas = [
    { nome: 'Issac Asimov', idade: 72 },
    { nome: 'Andrzej Sapkowski', idade: 77 },
    { nome: 'John Scalzi', idade: 56 }
];
// Ordenar por nome (crescente, ignorando caixa)
pessoas.sort(function (a, b) {
    return a.nome.localeCompare(b.nome, undefined, { sensitivity: 'base' });

    //return a.idade - b.idade; // funciona
});
console.log(pessoas);

const alunos = [
    { nome: 'João', nota: 7, falta: 5 },
    { nome: 'Carlos', nota: 4, falta: 9},
    { nome: 'José', nota: 4, falta: 3},
    { nome: 'Tomas', nota: 8, falta: 5}
];
const alunosCopia = [...alunos];
alunosCopia.sort((a, b) => {
    if(a.nota !== b.nota) return a.nota - b.nota;
    if(a.falta !== b.falta) return b.falta - a.falta;
});
console.log(alunos);
console.log(alunosCopia);
