const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' },
];

const container = document.querySelector('.container');//seleciona o container
const div = document.createElement('div');//cria uma div

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];//destruturação do objeto elementos
    let criaTag = document.createElement(tag);//cria uma tag correspondente a partir da tag da destruturação
    let textoCriado = document.createTextNode(texto);//cria um Node text para o texto

    criaTag.appendChild(textoCriado);//atribui o node text nas tags
    div.appendChild(criaTag);//insere as tags criada na div
}
container.appendChild(div);//insere a div com as tags criadas no container
