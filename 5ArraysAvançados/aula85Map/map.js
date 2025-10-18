//Map altera valores do array sem alterar o tamanho

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobro = numeros.map(value => value * 2);
console.log(numerosDobro);

/**
 * Para cada elemento:
 * Retorne apenas uma string com o nome da pessoa
 * Remova apenas a chave "nome" do objeto
 * Adicione uma chave id em cada objeto
 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
//Retorne apenas uma string com o nome da pessoa
const pessoasNome = pessoas.map(obj => obj.nome);
console.log(pessoasNome);

//Remova apenas a chave "nome" do objeto
const pessoasSemNome = pessoas.map(obj => ({ idade: obj.idade }));//ou delete obj.nome; (altera o array original)
console.log(pessoasSemNome);

//Adicione uma chave id em cada objeto
const pessoasId = pessoas.map(function (obj, index) {
    const newObj = { ...obj };//impede que modifique o array original
    newObj.id = (index + 1) * 1000;
    return newObj;
});
console.log(pessoasId);
console.log(pessoas);
