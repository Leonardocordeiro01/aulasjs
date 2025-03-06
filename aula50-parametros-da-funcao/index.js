//Arguments que sustenta todos os argumentos enviados
// naão funciona na arrow function

function funcao(a, b, c){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total, a, b ,c);
}

funcao(1,2,3,4,5,6,7,8,9);


//formas de não deixar a fução dar erro caso um valor n seja declarado 
function funcao2(a, b){
    b = b || 0
    console.log( a + b );
}

funcao2(1);

function funcao3(a, b=2){
    console.log( a + b );
}

funcao3(1);

// atribuição via desestruturação 

function funcaoObj({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

const obj = {nome:'leo', sobrenome:'cordeiro', idade:19};

funcaoObj(obj);

function funcaoAr([var1, var2, var3]){
    console.log(var1, var2, var3);
}

funcaoAr(['leonardo', 'cordeiro', 18]);

//rest operator (...)
//funciona em qualquer função

const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('+', 1, 20, 30, 40, 3)

