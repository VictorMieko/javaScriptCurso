const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'}
];

//const novasPessoas = {};
//for (const pessoa of pessoas) {
//  const { id } = pessoa;
//  novasPessoas[id] = { ...pessoa };

const novasPessoas = new Map(); // cria um new Map
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa }); // set para setar o valor ns ordem de inserção, a chave que vc quer e o sehundo argumento é o valor pra por no Map
}
console.log(novasPessoas); // a ordem de inserção se mantêm (chave => valor)
// .get(valor da chave) para mostrar chave específica

/*
for(const [identifier, { id, nome }] of novasPessoas) { // destructor
    console.log(identifier, id, nome);
}
*/
for(const pessoa of novasPessoas) {
    console.log(pessoa); // retorna como array
}