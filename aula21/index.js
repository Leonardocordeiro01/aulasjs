/*
OPERADORES DE COMPARAÇÃO
> maior que
< menor que 
>= maior ou igual a
<= menor ou igual a 
== igualdade (**uso não recomendado**)
=== igualdade estrita
!= diferente (**uso não recomendado**)
!== diferente estrito
*/

const comp = 10 > 9;
console.log(comp);
const comp01 = 10 < 11;
console.log(comp01);
const comp02 = 10 >= 9;
console.log(comp02);
const comp03 = 10 <= 11;
console.log(comp03);
const comp04 = 10 == '10'
console.log(comp04); //era para ser false pois um é uma string portanto nao tem o valor de 10
const comp05 = 10 === '10'; 
console.log(comp05); // correto
const comp06 = 10 != '10'; 
console.log(comp06); // era pra ser true pois uma string 10 é diferente de um number com valor de 10
const comp07 = 10 !== '10'; 
console.log(comp07); //correto 