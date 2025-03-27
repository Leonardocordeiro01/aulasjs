//retorne a soma de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);

const pessoas = [
  { nome: "luiz", idade: 62 },
  { nome: "maria", idade: 23 },
  { nome: "eduardo", idade: 55 },
  { nome: "leticia", idade: 19 },
  { nome: "rosana", idade: 32 },
  { nome: "wallace", idade: 47 },
];
