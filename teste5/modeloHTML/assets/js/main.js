class validaLivros {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.livraria = this.carregarLivros();
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handlesubmit(e);
        });
    }

    handlesubmit(e) {
        e.preventDefault();

        const validCampos = this.checkCampos();

        if(validCampos) {
            const livro = this.criaLivro(); // instância
            this.livraria.push = livro; // coloca no array
            this.salvarLivro(this.livraria);
            alert('Foi');
            this.formulario.submit();
            this.formulario.reset(); // Reseta os input
        }
    }

    checkCampos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campos of this.formulario.querySelectorAll('.valid')) {
            const label = campos.previousElementSibling.innerText;
            if (!campos.value) {
                this.createError(campos, `O campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if (campos.classList.contains('ano-publicacao')) {
                if (!this.validaAno(campos)) valid = false;
            }
        }

        return valid;
    }
    validaAno(campos) {
        const ano = campos.value;
        let valid = true;

        if (ano < -1300 || ano > 2025) {
            this.createError(campos, `O ano deve ser maior que 1300a.c e menor que 2025.`);
            valid = false;
        }
        return true;
    }
    createError(campos, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campos.insertAdjacentElement('Afterend', div);
    }

    // Função que utiliza uma classe exterior para criar retornar livro
    criaLivro() {
        const titulo = this.formulario.querySelector('.titulo');
        const autor = this.formulario.querySelector('.autor');
        const genero = this.formulario.querySelector('.genero');
        const ano = this.formulario.querySelector('.ano-publicacao');

        return new Livro(titulo, autor, genero, ano);
    }
    salvarLivro() {
        localStorage.setItem('livros', JSON.stringify(this.livraria));
    }
    carregarLivros() {
        return JSON.parse(localStorage.getItem('livros')) || [];
    }
}
const livraria = new validaLivros();

class Livro {
    constructor(titulo, autor, genero, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ano = ano;
    }
}
