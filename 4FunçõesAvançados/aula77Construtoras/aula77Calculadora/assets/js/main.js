//Calculadora em função construtora

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = function () {
        this.cliqueButoes();
        this.pressionaEnter();
    };

    this.cliqueButoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.deleteUm();            
            if (el.classList.contains('btn-eq')) this.realizaConta();

            this.display.focus();
        });
    };

    this.btnParaDisplay = (valor) => this.display.value += valor;

    this.clearDisplay = () => this.display.value = '';

    this.deleteUm = () => this.display.value = this.display.value.slice(0, -1);
    
    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }
};

const calculadora = new Calculadora();
calculadora.inicia();
