// *PADRÃO* IEEE 754-2008

let num1 = 1; // number
let num2 = 2.5; // number
let numBin = 1500; 
let numArr = 10.45676234321;
let temp = num1 * 'ola'; // not-a-number
let temp2 = '5'; // String
let numImpr = 0.7;
let numImpr2 = 0.1;
let numImprS = 0.7;
let numImprS2 = 0.1;
let numImprT = 0.7;
let numImprT2 = 0.1;
let numImprQ = 0.7;
let numImprQ2 = 0.1;


console.log(num1+num2); // conta normal 

console.log(num1.toString()+num2); // converte a variavel numbem nesse momento em uma string, como podemos ver a baixo 
console.log(typeof num1); // podemos ver que continua como um number 
// num1 = num1.toString(); fazendo assim transformariamos o numeber em string
console.log(numBin.toString(2)); // converte para binario

console.log(numArr.toFixed(2)); // arredonda o numero 

console.log(Number.isInteger(num1) ) // me mostra se um numero é inteiro ou não 

console.log(Number.isNaN(temp)); // vai me retornar true se a conta for invalida
console.log(Number.isNaN(num1*num2)); // vai me retornar false se a conta for valida
console.log(num1+temp2); //concatena 
console.log(num1*temp2); //resolve, mas n devemos fazer contas assim sempre converter string para number se for realizar contas

//resolvendo imprecisões
//1°
numImpr += numImpr2; // 0.8
numImpr += numImpr2; // 0.9
numImpr += numImpr2; // 1.0 mas ele é impreciso entao vai dar 0.99999...

numImpr = numImpr.toFixed(2); // assim resolveriamos so aos nossos olhos, não seria um numero inteiro
console.log(numImpr);
console.log(Number.isInteger(numImpr));

//2°
numImprS += numImprS2; // 0.8
numImprS += numImprS2; // 0.9
numImprS += numImprS2; // 1.0

numImprS = parseFloat(numImprS.toFixed(2)); // assim resolvemos de verdade

console.log(numImprS);
console.log(Number.isInteger(numImprS))

//3°
numImprT += numImprT2; // 0.8
numImprT += numImprT2; // 0.9
numImprT += numImprT2; // 1.0

numImprT = Number(numImprT.toFixed(2)); // assim resolvemos de verdade

console.log(numImprT);
console.log(Number.isInteger(numImprT))

//4°
numImprQ = ((numImprQ * 100) + (numImprQ2 * 100)) / 100; // 0.8
numImprQ = ((numImprQ * 100) + (numImprQ2 * 100)) / 100; // 0.9
numImprQ = ((numImprQ * 100) + (numImprQ2 * 100)) / 100; // 10
//resolve o problema mas deixa o codigo mais complexo então as melhores maneiras são a 2° e a 3°
console.log(numImprQ);
console.log(Number.isInteger(numImprQ))