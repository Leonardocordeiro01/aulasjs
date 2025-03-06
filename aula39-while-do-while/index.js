// const nome = 'eu'

// let i = 0;

// while (i < nome.length) { // não é recomendado usar assim, pois temos o for 
//     console.log(nome[i]);
// };
// console.log("segue a vida")

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max); // se o rand fosse 10 isso não seria executado
    console.log(rand);
}

console.log('########');

let test = 10

do {
    console.log(test); // ja nessa, sempre vai haver pelomenos uma execução 
} while (test !== 10); // pois a verificação do valor é no final do codigo