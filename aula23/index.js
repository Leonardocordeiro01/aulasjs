/*
&& -> flase && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY (valores falsos)
false
0
'' "" ``
null / undefined
NaN
*/

console.log('Leonardo' && 0 && 'Mariana')

function falaOi () {
    return 'oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Leonardo Cordeiro' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

