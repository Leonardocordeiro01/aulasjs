// PRODUTOS
// camiseta, caneca, lapis
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco, cor);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurabl: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("gen", 100);
const camiseta = new Camiseta("regata", 50, "preta");
const caneca = new Caneca("Caneca grande", 15, "porcelana", 10);
caneca.estoque = 100;

console.log(caneca);
console.log(camiseta);
console.log(produto);
