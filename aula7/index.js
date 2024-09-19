//não podemo criar constantes com uma palavra reservada
//constantes precisam ter nomes significativos
//assim mesmo sem o contexto sabemos do que se trata 
//não podemos começar o nome de uma constante com um número 
//ao final n tem problema
//não podem conter espaços ou traços
//utilizamos camelCase ex:
//case-sensitive
//não podemos modificar o valor de uma constantes
//NAO UTILIZE VAR UTILIZE CONST.
const nome='joão';
console.log(nome);

//+ - * /
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5
console.log (resultadoTriplicado)

const numeroString = '1'; 
const numeroStringDois = '2';

console.log(numeroString + numeroStringDois); //concatena
console.log(primeiroNumero + segundoNumero); //soma

console.log(typeof primeiroNumero + numeroString); //concatena 

console.log(typeof (primeiroNumero + segundoNumero)); //faz a soma primeiro e depois ve se é number ou string

console.log(typeof numeroString)

//string= text | number = numero

console.log(typeof primeiroNumero);
