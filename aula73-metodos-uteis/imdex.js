/*
object.values // le os valores
object.entries //  coloca as propriedades do obj entre arrays 
object.assign(des, any)
object.getOwnPropertyDescriptor(o, 'prop')
... (spred)

// já vimos
object. keys (retorna as chaves)
object.freez (conjela o objeto)
object.defineProperties (define váriaveis propriedades)
object.defineProperty (define uma propriedade)

*/

const produto = {
  nome: "caneca",
  preco: 1.8,
};
//const outraCoisa = produto; // vao apontar para a mesma coisa na memoria
const outraCoisa = { ...produto, material: "porcelana" }; // tem o produto copiado a cada modificação, pode adicionar mais coisas ao obj
// outro metodo
const caneca = Object.assign({}, produto, { peso: 1.5 });

outraCoisa.nome = "Leonardo cordeiro";
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);
console.log(caneca);
console.log(Object.keys(produto));
// Object.freeze(produto);

const celular = { nome: "j5", preco: 1.5 };
Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false,
  value: "qualquer coisa",
});
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
console.log(celular);

console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
