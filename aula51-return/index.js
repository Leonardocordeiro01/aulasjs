//return
//retorna um valor
//termina a função
function soma(a,b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a + b);
}

soma(2, 5);// esse me da o retorno 
soma(2, 5);//esse mostra o consolelog dentro da função

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red'
// }); // mesmo que ela não retorne um valor, ela tem funcionalidade pq executa uma ação 

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('luiz', 'otavio');

console.log( p1)

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto; //estou retornando essa função sem executala 
}

const olaMundo = falaFrase('olá');
console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n) {
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));