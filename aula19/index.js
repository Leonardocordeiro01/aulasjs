/*
Primitivos (imutáveis) - string, number, boolean, undefined
null (bigint, symbol)
*/

//          0123
let nome = 'Luiz';
nome[0] = 'R';   // isso mostrra que os valores são imutaveis 
console.log(nome[0], nome);

let a = 'A';
let b = a;  // cópia
console.log(a, b);

a = 'outra coisa';
console.log(a, b);

/*
Referência (mutável) = array, object, function
*/
let c = [1, 2, 3];  // [array]
let d = c; // [...c] <- se caso queira copiar o vlor de c para dentro do d
let e = d;

console.log(c, d); 

c.push(4);
console.log(c, d); // Eles apontam para o mesmo valor na memoria

d.pop(4);
console.log(c, d);

c.push('Leo')
console.log(e)

// Utilizando objetos agora

const f = {
    nome: 'Leonardo',
    sobrenome: 'Cordeiro'
};
const g = f; // {...f} <- copio o valor de f para dentro do g   

f.nome = 'João'
console.log(g);

/* Então a diferença dos valores 
primitivos e por referencia é
primitivos são copiados / independentes
referencia apontam o mesmo local da memoria 
*/