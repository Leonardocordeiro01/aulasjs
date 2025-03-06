const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){ // funcionas em qualquer estrutura de repetição

    if (numero === 2) {
        console.log('Pule o numero 2'); // muito utilizado quando eu quero iguinorar um codigo
        continue;                      // mas continuar no loop
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado'); // muito utilizado para parar o loop
        break;                      
    }
}

