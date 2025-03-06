function retornaFunção(nome) {
    return function() {
        return nome;
    };
}

const funcao = returnaFuncao('luiz');
const funcao2 = returnaFuncao('leonardo');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2())