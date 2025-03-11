

function Calculadora() {

    this.display = document.querySelector('.display');

    this.capturaClique = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNUmeroDisplay(el);

            if (el.classList.contains('btn-clear')) this.clearDisplay();

            if (el.classList.contains('btn-del')) this.apagaUm();

            if (el.classList.contains('btn-eq')) this.realizarConta();
        });
    };

    this.inicia = () => {
        this.capturaClique();
    };


    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.realizarConta = () => {
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


    this.addNUmeroDisplay = el => this.display.value += el.innerText;

}


const calculadora = new Calculadora();
calculadora.inicia();