// Primeiro exemplo 
try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e deu erro'); // como deu erro, vamos para o tratamento sem fechar o arquivo 
    console.log(a);
    console.log('Fechei o arquivo');
} catch {
    console.log('Tratei do erro');
} finally {
    console.log('Fechei arquivo'); // aqui fechamos o arquivo que foi aberto, o finally sempre sera executado
};

// Segundo exemplo
function retornaHora(data) {
    //verifico se é uma data real
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia de Date'); //se não for aleto o erro
    }
    //verifico se alguma data foi enviada
    if (!data) {
        data = new Date();
    }

    //retorne a data de hj
    return data.toLocaleTimeString('pt-BR', {
        hours: '2-digit',
        minuts: '2-digit',
        secunds: '2-digit',
        hour12: false
    });


}

try {
    const data = new Date('01-01-2025 01:01:01');
    const dataError = 11;
    const hora = retornaHora(data);
    console.log(hora);
} catch {
    //tratariamos o erro
    console.log(data)
} finally {
    console.log('Tenha um bom dia!');
}
