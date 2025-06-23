const library = [];

const container = document.querySelector('.container');

container.addEventListener('submit', function (e) {
    e.preventDefault();

    const bookName = document.querySelector('#Nome-do-Livro');
    const gender = document.querySelector('#genero');
    const autorName = document.querySelector('#Nome-do-autor');
    const inputPublicationYear = document.querySelector('#Ano-de-publicação');

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
    })

    const msg = `Nome do livro:${bookName.value}<br> Gênero:${gender.value}<br> Nome do autor:${autorName.value}<br> Ano de publicação:${publicationYear}<br>`;
    setResult(msg, true);

    displayBook();
});

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const available = document.querySelector('.disponivel');
    available.innerHTML = '';

    const p = criaP();

    if (!isValid) {
        p.classList.add('available-false');
    }
    p.innerHTML = msg;
    available.appendChild(p);
}

function criaUl(){
    const ul = document.createElement('ul'); // Cria uma lista não ordenada
    return ul;
}

function displayBook() {
    const bookList = document.querySelector('#book-list');
    bookList.innerHTML = '';

    if (library.length === 0) {
        setResult(`Não há nenhum livro na biblioteca.`, false);
        return;
    }

    const ul = criaUl();

    library.forEach((book) => {
        const li = document.createElement('li'); // Cria um item de lista para cada livro
        li.innerHTML = `
            Nome do Livor: ${book.bookName}<br>
            Ano de Publicação: ${book.publicationYear}<br>
            Autor: ${book.autorName}<br>
            Gênero: ${book.gender}
            `;
        ul.appendChild(li);
    });
    bookList.appendChild(ul);
}