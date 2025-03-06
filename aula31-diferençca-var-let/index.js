const verdadeira = true;

// Let tem escopo de bloco {...bloco...}
// Var só tem escopo de funçaão

let nome = 'luiz'; //criado
var nome2 = 'luiz'; //criado

console.log("1° ex:", nome, nome2);

if (verdadeira) {
    let nome = 'leonardo'; //criado
    var nome2 = 'cordeiro' // redeclarado
    console.log("2° ex:", nome, nome2);

    if (verdadeira) {
        let nome = 'outra coisa'; //criado
        var nome2 = 'qualquer'; // redeclarado
        console.log("3° ex:", nome, nome2);      // se meu let nao for encontrado neste bloco ele vai procurar no outro bloco
    };                                           // e so se não for achado em nenhum bloco ele dara erro 
};


console.log("4° ex:", nome, nome2);

console.log('')
console.log('')
console.log('')

console.log('Escopo de função:')

var oi = 'oi'

function saudação () {
    console.log(oi)

    var ola = 'ola'
};

// console.log(ola) <- isso daria erro, pq o var ola esta dentro da funçao
// a funçao não deixa as variaveis criadas dentro dele sair apenas as variaveis criadas fora entrar 

saudação();


