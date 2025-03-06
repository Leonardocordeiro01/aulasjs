// declaração de funções (function hoisting)
falarOi();

function falarOi () {
    console.log("Oi");
};

//first-class objects (objetos de primeira classe)
// function expression

const souUmDado = function () {
    console.log("sou um dado");
};

souUmDado();

//arrow function
const arrowFuction = () => {
    console.log("sou uma arrow function");
};
arrowFuction();