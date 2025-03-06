// for clássico - Geralmente usado com interáveis (arrays ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos);
// for of - retorna o valor em si (interáveis, arrays ou strings)
const nomes = ['Leonardo', 'Oliveira', 'batista', 'Cordeiro'];

for ( let i = 0; i < nomes.length; i++) { //fazemos um contador para percorrer  indice
    console.log(nomes[i]);
};

console.log('##########')

for (let i in nomes){ //percorre os indices
    console.log(i);
};

console.log('##########')

for (let valor of nomes){ //le os valores
    console.log(valor)
}


console.log('##########')

nomes.forEach(function(va, ind, arr){
    console.log(va, ind, arr); //posso pegar o volor, indice e array de uma vez
});

console.log('##########')
console.log('##########')

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

//o for of nao funciona com esse exemplo objeto não é inteiravel, e o classico não é o mais adequado.

for (let valor in pessoa){ 
    console.log(valor, pessoa[valor]);
};

