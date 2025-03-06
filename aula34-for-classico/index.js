// i = index
// para analisar a condição, vamos falar: 
// " <= a repetição vai continuar enquanto i for maior q o valor definido"
for (let i = 0; i <= 10; i++){
    console.log(`T1: Linha ${i}`)
}

for (let i = 0; i <= 100; i += 20){
    console.log(`T2: Linha ${i}`)
}

for (let i = 50; i >= 10; i -= 5){
    console.log(`T3: Linha ${i}`)
}

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par)
}

const frutas = ['maçã', 'banaba', 'uva', 'pera', 'goiaba', 'jabuticaba']
let contador = 0;

for (let i = 0; i < frutas.length; i++) {
    contador++;
    console.log(`fruta ${contador}`, frutas[i]);
}