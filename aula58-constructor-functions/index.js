// função construtora -> retorna objetos
// construtora -> Pessoa (new)

// função fabrica  -> fabrica objetos 

function Pessoa(nome, sobrenome) {
    //Tributos ou métodos privadas (nao disponiveis fora do copo do objt)
    const ID = 12345;

    const metodoInterno = () => {

    };

    //atributos ou métodos publicos (disponiveis fora do corpo do objt)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método')
    };
}

const p1 = new Pessoa('leo', 'rafael');
const p2 = new Pessoa('paloma', 'cordeiro');

console.log(p2.nome)
p1.metodo();