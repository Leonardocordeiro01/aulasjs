/*
Verificar se o numero esta entre 0 e 11, e qual ele é 
*/

const numero = 7

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if ( numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
} else if  ( numero >= 9 && numero <= 11) {
    console.log('O número está ente 9 e 11.');
} else {
    console.log('O número não está ente 0 e 11.');
}

console.log(`e o numero é ${numero}`)