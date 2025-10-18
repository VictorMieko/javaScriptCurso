const numero = Number(prompt('Digite um número:'));//prompt retorna string, number para retornar para Number

const numeroTitulo = document.getElementById('numero-titulo');//seleciona por ID
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';//valor vazio para limpar o texto para ser preenchido depois
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.<p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.<p>`;
texto.innerHTML += `${numero} é inteiro?: ${Number.isInteger(numero)}.<p>`;
texto.innerHTML += `<p>É NaN?: ${Number.isNaN(numero)}.<p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.<p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}.<p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.<p>`;
