const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const minhaSection = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const tagC = document.createElement(tag);
    const textoC = document.createTextNode(texto);

    tagC.appendChild(textoC);
    div.appendChild(tagC);
}

minhaSection.appendChild(div);   