const hora = 50;

if(hora >= 0 && hora <= 11){
    console.log('bom dia');
}else if(hora > 12 && hora < 17){
    console.log('boa tarde')
}else if(hora >= 18 && hora <= 23){
    console.log('boa noite');
}else{//precisa de um if antes
    console.log('tá em jupiter?');
}

const Grana = true;
if(Grana){//para opções de true e false
    console.log(`vou sair de casa`);
}else{
    console.log(`não vou sair`);
}

const numero = 8;
if(numero >= 0 && numero <= 5){
    console.log('O numero está entre 0 e 5');
} else if(numero >= 6 && numero <= 8){
    console.log('o numero está entre 6 e 8');
}else if(numero <= 9 && numero <= 11){
    console.log('o numero está entre 9 e 11');
}else{
    console.log('o numero não está entre 0 e 11');
}

// "? :" para if/else simples
const idade = 56;
const brinquedo = idade >= 35 && idade <= 12 ? 'Você pode brincar' : 'você não pode brincar';
console.log(brinquedo);