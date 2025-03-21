//filter -> sempre vai retornar um array, com a mesma quantidade de elementos ou menor.

// Retorne os valores maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let maiorDez = [];

for (const numero of numeros) {
  if (numero > 10) {
    maiorDez.push(numero);
  }
}
console.log(maiorDez);

//com filter

const numeroFiltrados = numeros.filter((valor) => valor > 10);
console.log(numeroFiltrados);

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo o nome termina com a
const pessoas = [
  { nome: "luiz", idade: 62 },
  { nome: "maria", idade: 23 },
  { nome: "eduardo", idade: 55 },
  { nome: "leticia", idade: 19 },
  { nome: "rosana", idade: 32 },
  { nome: "wallace", idade: 47 },
];
const pessoasNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasNomeGrande);
const pessoasMaisVelhas = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoasMaisVelhas);
const terminaComA = pessoas.filter((obj) => {
  obj.nome.toLowerCase().endsWith("a");
});
console.log(terminaComA);
