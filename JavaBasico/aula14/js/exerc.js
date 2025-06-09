const nome = 'Luiz Otávio';
const sobreNome = 'Mirando';
const idade = 36;
const peso = 84;
const alturaEmM = 1.80;

let imc;
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

console.log(nome, sobreNome,'tem', idade,'anos, pesa', peso, 'kg, tem', alturaEmM, 'de altura e seu IMC é de', imc, 'nasceu em', anoNascimento, '.');
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}, nasceu em ${anoNascimento}.`);