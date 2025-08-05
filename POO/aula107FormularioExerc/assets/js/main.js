class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario'); // seleciona o formulario para carregar os eventos
        this.eventos(); // para carregar quando abrir a classe
    }

    eventos() {
        this.formulario.addEventListener('submit', e => { // arrow function para continuar utilizando o "this"
            this.handleSubmit(e); // gerencia o envio de um formulario HTML, ativada quando o usuário tenta enviar
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.checkFields(); // validar o formulario
        const validPassword = this.checkPassword();

        if(validFields && validPassword) {
            alert('formulario enviado');
            this.formulario.submit();
        }
    }

    checkPassword() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            this.createError(senha, 'Campos senha e repetir senha devem ser iguais.');
            this.createError(repetirSenha, 'Campos senha e repetir senha devem ser iguais.');
            valid = false;
        }
        if (senha.value.length < 6 || senha.value.length > 12) {
            this.createError(senha, 'Senha e deve, estar entre 6 e 12 caracteres.');
            valid = false;
        }

        return valid;
    }

    checkFields() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) { // impede que crie mais de uma mensagem de erro
            errorText.remove();
        }

        for (let field of this.formulario.querySelectorAll('.valid')) { // para selecionar os campos desejados para validar
            const label = field.previousElementSibling.innerText; // guarda o texto do "irmão" anterior (label)
            if (!field.value) { // se o campo estiver vazio
                this.createError(field, `O campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if (field.classList.contains('cpf')) { // validar CPF
                if (!this.validaCPF(field)) valid = false;
            }

            if (field.classList.contains('usuario')) {
                if (!this.validaUsuario(field)) valid = false;
            }
        }

        return valid;
    }

    validaCPF(field) {
        const cpf = new ValidaCPF(field.value);

        if (!cpf.valida()) {
            this.createError(field, 'CPF inválido');
            return false;
        }
        return true;
    }

    validaUsuario(field) {
        const usuario = field.value;

        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(field, 'Usuário deverá ter entre 3 e 12 caracteres.');
            valid = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) { // expressão regular que determina quais caracteres são permitidos
            this.createError(field, 'Usuário só poderá conter letras e/ou números.')
            valid = false;
        }

        return valid;
    }

    createError(field, msg) {
        const div = document.createElement('div'); // cria div
        div.innerHTML = msg; // põe a mensagem dentro da div
        div.classList.add('error-text'); // adiciona classe a essa div

        field.insertAdjacentElement('afterend', div); // e a exibe a direita do campo essa div
    }
}
const valida = new ValidaFormulario();
