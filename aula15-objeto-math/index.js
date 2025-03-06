let num1 = 9.54578
let num2 = Math.floor(num1); // arredonda para baixo 
let num3 = Math.ceil(num1); // arredonda para cima
let num4 = Math.round(num1); //arredonda corretamente, caso seja maior ou igual a 5 para cima menor q isso para baixo 

console.log(num2);
console.log(num3);
console.log(num4);

console.log(Math.max(1,2,3,4,5,-10,1050,-50)); // me mostra o maior numero da sequencia 
console.log(Math.min(1,2,3,4,5,-10,1050,-50)); // me mostra o menor numero da sequencia
const aleatorio1 = Math.random(); // cria um numero aleatorio que é menor q um e maior q zero 
const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5); // cria um numero aleatorio que é menor q dez e maior q 5

console.log(aleatorio1);
console.log(aleatorio2);

console.log(Math.PI); // me mostra o valor de PI

console.log(Math.pow(2, 10)); // eleva / potencia
console.log(2 ** 10); // o mesmo resultado de forma mais simples 

let num5 = 9;
console.log(num5 ** (0.5)); // assim vemos a raiz quadrada de um numero poderiamos tamber ter utilizado 1/2

console.log(100 / 0); // vai resultar infinity e true 
console.log(!!(100 / 0));
