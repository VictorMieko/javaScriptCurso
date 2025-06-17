//Escreva uma função que recebe 2 números e retorne o maior deles

const numero1 = 5;
const numero2 = 9;

const maiorNumero = (num1, num2) => num1 > num2 ? num1 : num2;//Function Arrow mas extremamente simplificada
console.log(maiorNumero(numero1, numero2));

/*
const maiorNumero = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}
console.log(maiorNumero(numero1, numero2));
*/
/*
function maiorNumero(num1, num2){
    const numeroMaior = num1 > num2 ? num1 : num2;
    console.log(numeroMaior);
}
*/
