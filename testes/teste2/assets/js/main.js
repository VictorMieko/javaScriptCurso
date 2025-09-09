const bookName = document.querySelector('#Nome-do-Livro');
const gender = document.querySelector('#genero');
const autorName = document.querySelector('#Nome-do-autor');
const inputPublicationYear = document.querySelector('#Ano-de-publicação');
const btnEnviar = document.querySelector('.btn-enviar');
const bookList = document.querySelector('#book-list');

const library = [];

//função ao pressionar o butão de enviar
btnEnviar.addEventListener('click', function (e) {
    e.preventDefault();
    const publicationYear = Number(inputPublicationYear.value);
    if (!publicationYear || publicationYear >= 2026 || publicationYear < 1000) {
        setResult('Ano inválido', false);
        return;
    }
    library.push({
        bookName: bookName.value,
        gender: gender.value,
        autorName: autorName.value,
        publicationYear: publicationYear
    });

    const msg = `Nome do livro:${bookName.value}<br> Gênero:${gender.value}<br> Nome do autor:${autorName.value}<br> Ano de publicação:${publicationYear}<br>`;
    setResult(msg, true);
    criaLivro();
    limpaInput();
});

//de alguma forma ta funcionando
inputPublicationYear.addEventListener('keypress', function (e) {
    if (e.keycode === 13) {
        if (!publicationYear || publicationYear >= 2026 || publicationYear < 1000) {
            setResult('Ano inválido', false);
            return;
        }
    }
});

function setResult(msg, isValid) {
    const available = document.querySelector('.disponivel');
    available.innerHTML = '';

    const p = document.createElement('p');

    if (!isValid) {
        p.classList.add('available-false');
    }
    p.innerHTML = msg;
    available.appendChild(p);
}

function criaLivro() {
    const bookList = document.querySelector('#book-list');
    bookList.innerHTML = '';

    const ul = document.createElement('ul');

    library.forEach((book) => {
        const li = document.createElement('li'); // Cria um item de lista para cada livro
        li.innerHTML += `
            Nome do Livor: ${book.bookName}<br>
            Ano de Publicação: ${book.publicationYear}<br>
            Autor: ${book.autorName}<br>
            Gênero: ${book.gender}
            `;
        ul.appendChild(li);
    });
    bookList.appendChild(ul);
    salvarLivros();
}

function limpaInput() {
    bookName.value = '';
    gender.value = '';
    autorName.value = '';
    inputPublicationYear.value = '';

    bookName.focus();
}

function salvarLivros(){
    const livrosLi = bookList.querySelectorAll('li');
    const librarySave = [];

    for(let i of livrosLi){
        let livrosTexto = i.innerText;
        librarySave.push(livrosTexto);
    }

    const livrosJSON = JSON.stringify(librarySave);
    localStorage.setItem('bookList', livrosJSON);
}
