const meuformulario = document.getElementById('meuformulario');

meuformulario.addEventListener('submit',function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
   
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }
    
    if (!altura) {
        setResultado('Altura invalido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelIMC = getNivelImc(imc);

    const msg = `IMC = ${imc} | ${nivelIMC}`

    setResultado(msg, true)
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
        'Obesidade grau 1', 'Obesidade grau 2', 'Obrsidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];  
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    const p = criaP ();

    if (isValid) {
         p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}











    /*function mostrarResultado() {
        let resultado;

        if (isNaN(peso) || peso <=0) {
            resultado = 'Peso invalido'
            bgRed ();
        } else if (isNaN(altura) || altura <=0) {
            resultado = 'Altura invalida'
            bgRed ();
        } else {
            const imc = peso / (altura**2);
        
            if (imc < 18.5) {
                resultado = `IMC = ${imc.toFixed(2)} | Abaixo do peso`;
                bggreen ();
            } else if ( imc >= 18.5 && imc <= 24.9) {
                resultado = `IMC = ${imc.toFixed(2)} | Peso normal`
                bggreen ();
            } else if ( imc >= 25 && imc <= 29.9) {
                resultado = `IMC = ${imc.toFixed(2)} | Sobrepeso`
                bggreen ();
            } else if ( imc >= 30 && imc <= 34.9) {
                resultado = `IMC = ${imc.toFixed(2)} | Obesidade grau 1`
                bggreen ();
            } else if ( imc >= 35 && imc <= 39.9) {
                resultado = `IMC = ${imc.toFixed(2)} | Obesidade grau 2`
                bggreen ();
            } else {
                resultado = `IMC = ${imc.toFixed(2)} | Obesidade grau 3`
                bggreen ();
            } 

        }
    document.getElementById('resultado').innerText = resultado;
    }

    mostrarResultado();
});*/