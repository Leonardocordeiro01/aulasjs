let umaString01 = 'Um "texto"'; //podemos usar aspas duplas dentro das simples
let umaString02 = "Um \"texto\""; //podemos tambem usar aspas duplas dentro de duplas dessa forma 
let umaString03 = "Um \\ texto"; // e para usar uma barra invertida precisamos usar duas barras invertidas
let umaStringInde = "Um texto"; // uma string é indexada 
let umaStringInde02 = "O rato roeu a roupa do rei de roma."; // uma string é indexada 
//                     0123456789

console.log(umaStringInde[4]);
console.log(umaStringInde.charAt(6)); // para ver o indice da string igual o de cima

console.log(umaStringInde.concat('', 'lindo')); // concatena a string 
console.log(umaStringInde + 'em um lindo dia'); // concatena a string 
console.log(`${umaStringInde} em um lindo dia`); // concatena a string 

console.log(umaStringInde.indexOf('texto')); // ele me mostra o indice onde começa a palavra
console.log(umaStringInde.indexOf('o', 3)); // ele me mostra apartir do indice q coloquei

console.log(umaStringInde.lastIndexOf('o',3)); // ele me mostra de tras pra frente o indice 

console.log(umaStringInde.match(/[a-z]/g)); // letras minusculas
console.log(umaStringInde.match(/[a-z]/)); // informações 

console.log(umaStringInde.search(/x/)); // encontra  indice e aceita expreções regulares

console.log(umaStringInde02.replace(/rato/,'outra')); // subistitui a string 
console.log(umaStringInde02.replace(/r/g,'#')); // subistui todos os r

console.log(umaStringInde02.length);// vemos quantos indices tem a string

console.log(umaStringInde02.slice(2, 6));//onde o indice vai ser fatiado
console.log(umaStringInde02.slice(-5, -1));//ele começa do final (32) e conta os menos 5 e menos 1

console.log(umaStringInde02.split(''));// divide nos espaçes em branco 
console.log(umaStringInde02.split('', 2));// divide nos espaçes em branco apenas duas vezes 

console.log(umaStringInde02.toUpperCase());// vem toda maiuscula 
console.log(umaStringInde02.toLowerCase());// vem toda minuscula

console.log(umaString01);
console.log(umaString02);
console.log(umaString03);
