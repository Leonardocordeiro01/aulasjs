const nome = 'luiz Otávio';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento= 2024 - idade;

// templtate string 

console.log (`${nome} ${sobrenome}  tem ${idade} anos pesa ${peso} kg tem 4{altura} de altura e seu imc é de ${indiceMassaCorporal}nasceu em ${anoNascimento}.`  )