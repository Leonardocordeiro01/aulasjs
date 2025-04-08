// construtora -> molde (class)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //   this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

Pessoa.prototype.estouAqui = "hahahahah";
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};
// instância
const pessoa1 = new Pessoa("luiz", "O."); // Pessoa = função construtora
const pessoa2 = new Pessoa("maria", "A.");
const data = new Date();

console.dir(pessoa1);
console.dir(data);
