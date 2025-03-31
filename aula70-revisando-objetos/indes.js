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

console.log(" ");
console.log(" ");

// factory functions / classes
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      //get faz que eu consiga chamar a função sem os parenteses ()
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("leonardo", "cordeiro");
console.log(p1.nomeCompleto);

// constructor functions / classes

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// {} <- this / cria um objeto vasio e atrela a palavra this a ele
const p2 = new Pessoa("leonardo", "cordeiro");
console.log(p2);

const p3 = {}; // é basicamente isso que a palavra new faz
p3.nome = "refael";

//p1.nome = 'lucas' -> isso nao modificaria a constante
// p1 = (ENDERECODEMEMORIA) -> 'VALOR'
// p1.ENDERECOMEMORIA = {nome: 'outra coisa'};
// p1 = (NOVOENDERECOMEMEORIA);

// travando objetos
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}
const p4 = new Pessoa2("leonardo", "cordeiro");
p1.nome = "qualquer coisa"; //isso nao vai alterar ele por causa do Object.freeze
