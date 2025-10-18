import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracter = document.querySelector('.qtd-caracter');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkNumero = document.querySelector('.chk-numeros');
const chkSimbolo = document.querySelector('.chk-simbolos');
const bttGerarSenha = document.querySelector('.gerar-senha');

export default () => {
    bttGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracter.value,
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chkNumero.checked,
        chkSimbolo.checked
    );

    return senha || "Nada selecionado";
}
