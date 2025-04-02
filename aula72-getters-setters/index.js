function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // configura se posso configurar a chavea
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("mensagem");
      }

      estoquePrivado = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa", "");
      nome = valor;
    },
  };
}

const p1 = new Produto("camiseta", 20, 3);
// console.log(p1);
// p1.estoque = "o valor que eu quero";
console.log(p1.estoque);

const p2 = criaProduto("camisa");
p2.nome = "qualquer coisa";
console.log(p2.nome);
