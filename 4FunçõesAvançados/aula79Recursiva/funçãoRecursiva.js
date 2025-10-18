//Função recursiva chama a si mesma
//motor do javaScript tem um limite de recursividade

//A função recebe um parâmetro
function recursiva(max) {
    console.log(max);//mostra na tela

    if (max >= 10) return;//limite pra quando a função para
    max++;//incrementa
    //console.log(max);//mostra na tela
    recursiva(max);//se chama de novo e reinicia o processo
}
recursiva(0);
