// arrays 
// indexad    012345678910
const nome = 'Luiz Otávio'
// indexado       0        1        3
const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo'; //altera o indice

alunos[3] - 'Luiza' // quando colocamos um valor de indice que ainda n tem, adicionamos um novo
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luiz';
alunos[alunos.length] = 'Luana'; // adiciona um item ao final

alunos.unshift('Mariana')
alunos.unshift('Leonardo');// adiciona no começo e por isso muda todos os indices depois dele 

alunos.push('Rafael');
alunos.push('Raquel'); // Adiciona ao final do array

console.log(alunos[0]);
console.log(alunos[2]);
console.log(alunos[3]);

const removidof = alunos.pop(); //remove o ultimo elemento 
const removidoc = alunos.shift(); //remove o primeiro elemento 

delete alunos[1]; //deleta o indice que eu expecificar, e n altera os indices

console.log(alunos[50]); // se eu tentar acessar um elemento q n temos a resposta sera undefield
console.log(alunos);
console.log(removidoc, removidof);
console.log(alunos.slice(0, 4)); // vou pegar os elementos do indice 0 ate o 4
console.log(typeof alunos);
console.log(alunos  instanceof Array);
