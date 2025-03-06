/*
Operadores Lógicos
&& -> AND -> E   -> todas as expressoes precisam ser verdadeiras para retornar true
|| -> OR  -> OU  -> todas as expressoes precisam ser falsas para retornar false
 ! -> NOT -> NÃO -> retorna o valor contrario do original
*/
operadorand = true && true 
console.log(operadorand)
operadoror = false || false
console.log(operadoror)
operadornot = (!true)
console.log(operadornot)

const usuario = 'Luiz'; // form usuario digitou
const senha = '123456'; // form usuario digitou

//                      True                True
const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);