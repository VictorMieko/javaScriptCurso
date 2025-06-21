try {//Tente executar
    console.log(naoExisto);
} catch (error) {//se der error faça
    console.log('naoExisto não existe');
}

function some(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');//captura e cria um "novo" erro
    }
    return x + y;
}

try {
    console.log(some(2, 2));
    console.log(some('2', 2));
} catch (error) {
    //console.log(error)
    console.log('Algo mais amigavel para o usuário');
}
