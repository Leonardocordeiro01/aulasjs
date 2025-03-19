//para usar o indice negativo pega o tamanho total menos o indice negativo
//                -5         -4        -3        -2       -1
//                 0          1         2         3        4
const nomes = ['eduardo', 'mariana','leonardo', 'jona', 'paloma'];

//nomes.splice(indice, delet, nome1, nome2, nome3);
//pop
const pop = nomes.splice(-1, 1);
console.log(pop);

//shift
const shifts = nomes.splice(0,1);
console.log(shifts);

// push
nomes.splice(nomes.length, 0, 'joao');
console.log(nomes);

//onshift
nomes.splice(0, 0, 'pedro');
console.log(nomes);

// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// const adicionados = nomes.splice(2, 1, 'helton');
// console.log(nomes, adicionados);