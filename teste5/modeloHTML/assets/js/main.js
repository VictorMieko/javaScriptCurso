class Livros {
    constructor() {
        this.formulario = document.querySelector('.formulario');
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
            alert('Foi');
            this.formulario.submit();
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
}
const livraria = new Livros();
