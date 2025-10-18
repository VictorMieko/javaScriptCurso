import GeraCPF from './modules/GeraCPF';
import ValidaCPF from './modules/ValidaCPF';

import './assets/css/style.css';

(function() {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const cpfValidado = document.querySelector('.cpf-validado');

    const gera = new GeraCPF();
    const novoCpf = gera.geraNovoCpf();

    const novoValidado = new ValidaCPF(novoCpf);
    
    cpfGerado.innerHTML = novoCpf;
    cpfValidado.innerHTML = novoValidado.valida();
    console.log(novoValidado);
})();
