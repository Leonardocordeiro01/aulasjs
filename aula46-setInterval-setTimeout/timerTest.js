const meuT = 5;
let conIni = 0;

function retorno(meuT) {
    return Number((""+meuT)+"000")
}

const tempo = retorno(meuT+1)


const timer =setInterval(function(){
    conIni++;
    console.log(conIni)}, 1000
)

setTimeout(function(){
    clearInterval(timer);
}, tempo);



