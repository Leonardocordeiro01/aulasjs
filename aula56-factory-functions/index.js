function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre nada ') {
            return `${this.nome} esta ${assunto}`
        },

        altura: altura,
        peso: peso,

        get imc() { // getter faz com que ele tenha a notação de um atributo 
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('leonardo', 'cordeiro', 1.78, 80);
p1.nomeCompleto = 'Maria Oliveira silva';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.fala)

const p2 = criaPessoa('Kaique', 'cunha', 1.8, 87);
console.log(p2.nomeCompleto);
console.log(p2.fala("falando sobre direito"));
console.log(p2.imc);


