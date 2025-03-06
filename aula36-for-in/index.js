const frutas = ['pera', 'maçã', 'uva']; // pode ser chamado de vetor 

for (let i in frutas){ // O for in le os indices do vetor/ array o as chaves do objeto 
    console.log(frutas[i]);
}

for (i = 0; i < frutas.length; i++){ // O for classico nos temos que criar um contador manual
    console.log(frutas[i]); 
}

const pessoa = {
    nome:'Leonardo',
    sobrenome:'Cordeiro',
    idade:'18'
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}