//map
//dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeroEmDobro = numeros.map((valor) => valor * 2);

console.log(numeroEmDobro);

// retorne apeas uma string com o nome da pessoa
// remova apenas a chave nome do obj
// adicione uma chave id em cada obj
const pessoas = [
  { nome: "luiz", idade: 62 },
  { nome: "maria", idade: 23 },
  { nome: "eduardo", idade: 55 },
  { nome: "leticia", idade: 19 },
  { nome: "rosana", idade: 32 },
  { nome: "wallace", idade: 47 },
];

const nomesPessoas = pessoas.map((obj) => obj.nome);
console.log(nomesPessoas);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);
const comIds = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});

console.log(pessoas);
console.log(comIds);
