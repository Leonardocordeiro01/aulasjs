// IIFE -> immediately invoked function expression

(function(idade, peso, altura) { //Executada assim que é criada e mesmo assim n esta no escopo global
    
    const sobrenome = "luis"
    
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('luiz'))
    }

    falaNome();
    console.log(idade, peso, altura)
})(30, 80, 1.80);

const nome = "leonardo";
console.log(nome)