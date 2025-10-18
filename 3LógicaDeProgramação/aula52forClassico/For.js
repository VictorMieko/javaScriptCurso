for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';//o resto da divisão de i por 2 é igual a zero? retorna numero par
    console.log(i, par);
}

for(let i = 0; i <= 10; i += 2){
    const par = [i];
    console.log(par);
}

const frutas = ['Maçã', 'Pêra', 'Uva'];
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}