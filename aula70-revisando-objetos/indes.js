const pessoas = {
  nome: "leonardo",
  sobrenome: "cordeiro",
};
const chave = "nome";
console.log(pessoas[chave]); // posso colocar valores dinamicos
console.log(pessoas.sobrenome);

const pessoa1 = new Object();
pessoa1.nome = "leonardo";
pessoa1.sobrenome = "cordeiro";
pessoa1.idade = 19;
pessoa1.falarNome = function () {
  return `${this.nome} esta falando seu nome.`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
  console.log(`${pessoa1[chave]}`);
}
