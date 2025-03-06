const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let horas = 0;
let minutos = 0;
let segundos = 0;
let timer = null;

function atualizarCronometro() {
    relogio.innerHTML = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
}

iniciar.addEventListener('click', function (event) {

    if (timer !== null) return;
    relogio.style.color= 'black';

    timer = setInterval(function(){
        segundos++;
        if (segundos >= 60) {
            segundos = 0
            minutos++
        };
        if (minutos >= 60) {
            minutos = 0;
            horas++
        };
        if (horas >= 24) {
            clearInterval(timer);
        };

        atualizarCronometro()
    },
        1000);
})

pausar.addEventListener('click', function (event) {
    clearInterval(timer)
    timer = null
    relogio.style.color= 'red';
})

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    timer = null;
    horas = 0;
    minutos = 0;
    segundos = 0;

    relogio.style.color= 'black';
    atualizarCronometro()
})

