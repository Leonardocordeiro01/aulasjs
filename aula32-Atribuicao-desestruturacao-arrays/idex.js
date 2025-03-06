// ...rest, ...spread

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...rest] = numeros;
console.log(um, dois, tres, rest);

//                      0                1                2
//                 0    1    2      0    1    2      0    1    2
const vogais = [ ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'] ];
const [vogais1, vogais2, vogais3] = vogais
console.log(vogais[1][2]);
console.log(vogais2[2])