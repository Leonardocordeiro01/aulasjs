

function Calculadora() {

    this.display = document.querySelector('.display');

    this.capturaClique = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) addNUmeroDisplay(el);

            if (el.classList.contains('btn-clear')) clearDisplay();

            if (el.classList.contains('btn-del')) apagaUm();

            if (el.classList.contains('btn-eq')) realizarConta();

            this.display.focus();
        });
    };

    this.inicia = () => {
        this.capturaClique();
        this.capturaEnter();
        
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return;
            realizarConta();
        })
    }


    const clearDisplay = () => {
        this.display.value = '';
    }

    const apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    const realizarConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta)

            if (!conta) {
                alert("conta invalida!");
                return;
            }

            this.display.value = String(conta)
        } catch {
            alert('conta invalida');
            return;
        }
    }


    addNUmeroDisplay = el => this.display.value += el.innerText;

}


const calculadora = new Calculadora();
calculadora.inicia();