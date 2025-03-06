function saudacao(nome) {
    return `bom dia ${nome}!`
}

const variavel = saudacao('Luiz');
// console.log(variavel); //undefid

/*
function soma(x = 1, y = 1) {
    const resultado = x + y
    return resultado;
}

const resultado = soma(2,2);
console.log(resultado);
*/ 

const raiz = function(n) {
    return n ** 0.5 // outra forma de usar funções so q mais moderna
} 

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

const raizn = n =>  n ** 0.5 // outra forma de usar funções so q mais moderna

console.log(raizn(9))
console.log(raizn(16))
console.log(raizn(25))

