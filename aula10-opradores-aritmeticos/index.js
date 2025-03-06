//operadores aritméticos, de atribuição e incremento
/*
 * Aritméticos 
 * + adição / concatenação
 * - 
 * / 
 * * 
 * ** 
 * %
 */

/*
* ()
* **
* / % *
* + -
*/

const num1 = 5;
const num2 = 10;
const num3 = 3;
const numst = '9';
console.log(num1 + num2); //soma
console.log(num1 + num2 * num3); //multiplicação tem precedencia maior
console.log((num1 + num2) * num3); //quem esta dentro do parenteses tem precedencia maior
console.log(num1 + numst); //concatena
console.log(num1 - num2); //subtrai 
console.log(num1 * num2); //multiplica
console.log(num1 / num2); //divide
console.log(num1 ** num2); //potenciação 
console.log(num1 % num2); //resto da divisão

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);
// pode ser ++pre(faz a conta primeiro e depois retorna o valor) ou pos++(executa a ação primeiro e depois faz o incremento do valor)
/*
incremento = ++
decremento = --

operadores de atribuição
*/
let contadorEx = 10;
console.log(contadorEx++)
console.log(contadorEx)
console.log(++contadorEx)
console.log(contadorEx--)
console.log(contadorEx)
console.log(--contadorEx)


let contador2 = 2;
contador2 += 10;
contador2 *= 2;
contador2 **= 2;
console.log(contador2);

// NaN - Not a number
const num01 = 10;
const num02 = parseInt('5'); 
console.log(num01 + num02);
console.log(typeof num02);
//parseInt transforma uma string em number, e numero quebrado em inteiro
//parseFloat transforma para decimais 
//number escreve o numero corretamente