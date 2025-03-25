// alterar elementos do array map
// se precisa filtrar filter
//reduzir o array a um elemento so reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
});
console.log(total);
const totalPares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) {
    acumulador += valor;
  }

  return acumulador;
}, 0);
console.log(totalPares);

// retorne a pessoa mais velha
const pessoas = [
  { nome: "luiz", idade: 62 },
  { nome: "maria", idade: 23 },
  { nome: "eduardo", idade: 55 },
  { nome: "leticia", idade: 19 },
  { nome: "rosana", idade: 32 },
  { nome: "wallace", idade: 47 },
];
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
