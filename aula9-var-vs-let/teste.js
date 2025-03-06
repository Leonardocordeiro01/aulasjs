//tipos de dados primitivos
//string, number, undefined, null, boolean
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `luiza`; // string
const num1= 10; // number
const num2 = 10.52; // number
let nomeAluno; //undefined -> não aponta para lugar nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para nenhum local na memória
const aprovado = false; /// boolean = true, false (lógico)

console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno); //bug, não é um objeto 
console.log(typeof aprovado, aprovado);

let a = 2;
const b = a;
 console.log(a, b);

 a = 3;
 console.log(a, b);