function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, //controla se o valor pode ser alterado
    configurable: false, // configura se posso configurar a chavea
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, //controla se o valor pode ser alterado
      configurable: true, // configura se posso configurar a chavea
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: true, //controla se o valor pode ser alterado
      configurable: true, // configura se posso configurar a chavea
    },
  });
}

const p1 = new Produto("camiseta", 20, 3);
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
