const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Cordeiro',
    idade: 18,
    endereco: {
        rua: 'Estrada Itaoca',
        numero: 5351
    }
};

const { nome, sobrenome} = pessoa;
console.log(nome, sobrenome);

const pessoa2 = {
    nome2: '',
    sobrenome2: '',
    idade: 18,
    endereco: {
        rua: 'Estrada Itaoca',
        numero: 5351
    }
};

const { nome2, sobrenome2 = 'posso colocar um valor'} = pessoa;
console.log(nome2, sobrenome2);

const pessoa3 = {
    nome3: 'Maria',
    sobrenome3: 'Oliveira',
    idade: 18,
    endereco: {
        rua: 'Estrada Itaoca',
        numero: 5351
    }
};

const {endereco: {rua: r, numero}, endereco, ...rest} = pessoa;
console.log(r, numero, endereco, rest);