const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `O seu nome é ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra i no seu nome?: ${nome.indexOf('i')}<br/>`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome?: ${nome.lastIndexOf('i')} <br />`;
document.body.innerHTML += `Ás últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;


//escrever algo no documento
//<br /> para pular linha
document.write('<br />algo aqui <br />');
//função dentro de "window" que serve para escrever no documento(body) e altera a outra
//concaltenação para adicionar o texto ao outro
document.body.innerHTML += 'qualquer outra coisa <br />';
document.body.innerHTML += 'qualquer outra coisa <br />';
document.body.innerHTML += 'qualquer outra coisa <br />';