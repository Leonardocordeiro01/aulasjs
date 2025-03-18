// valor por referencia
//                  0       1       2
const nomes = ['eduardo', 'maria', 'jona'];
// nomes[2] = 'joao';
// delete nomes[1];

// agora o novo nao reflete em nomes
const novo = [...nomes];

const removido = novo.pop();
const removidoComeco = novo.shift();
const fatiar = nomes.slice(1,3)
nomes.push('rafael');
nomes.unshift('wallace');
console.log(nomes);
console.log(novo);
console.log(removido);
console.log(removidoComeco);
console.log(nomes.length);
console.log(fatiar)

const nomeString = 'leonardo de oliveira batista cordeiro';
const nomesString = nomeString.split(' ');
console.log(nomesString)
const nomesArrays = [ 'leonardo', 'de', 'oliveira', 'batista', 'cordeiro' ]
const nomeArrays = nomesArrays.join(' ');
console.log(nomeArrays);