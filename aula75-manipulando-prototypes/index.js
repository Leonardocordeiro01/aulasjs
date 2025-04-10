//new object -> object.prototype
const objA = {
  chaveA: "A",
  // __proto__: object.prototype
};

const objB = {
  chaveB: "B",
  // __proto__: objA
};

const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB);

// usar getPrototypePf() ao inves de usar __proto__

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);

const p2 = {
  nome: "caneca",
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 104,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 20,
  },
});

p3.aumento(10);
console.log(p3);
