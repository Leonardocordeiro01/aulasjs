const pessoa = { // isso é um objeto 
    nome: 'luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() { //metodo (funções e metodos executam ações)
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Leonardo',
    sobrenome: 'cordeiro',
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome)
*/

// usando function

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, 
        sobrenome,
        idade
    };
} //fectory (função fábrica). Esse é um padrão de design em JavaScript que cria e retorna objetos.

const pessoa1 = criaPessoa('Luiz', 'otavio', 25);
const pessoa2 = criaPessoa('Leonardo', 'Cordeiro', 18);
const pessoa3 = criaPessoa('Mariana', 'Leon', 18);
const pessoa4 = criaPessoa('Rafael', 'Rocha', 30);
const pessoa5 = criaPessoa('Carlos', 'Lima', 23);

console.log(pessoa1.nome, pessoa2.nome)
