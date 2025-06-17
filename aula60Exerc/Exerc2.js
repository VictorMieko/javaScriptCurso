/**
 * Escreva uma função chamada ePaisagem que recebe dois argumentos,
 * largura e altura de uma imagem (number).
 * Retorne true se a imagem estiver no modo paisagem.
 */

const ePaisagem = (largura, altura) => largura > altura;//em funções de retorne de true ou false não é preciso escreve-las, a propria função faz isso
console.log(ePaisagem(1920, 1080));//true para paisagem
console.log(ePaisagem(1080, 1920));//false para vertical
console.log(ePaisagem(1920, 1920));//false para retrato
