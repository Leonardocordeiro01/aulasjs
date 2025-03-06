const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body);
const backgrandColorBody = estiloBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgrandColorBody;
    p.style.color = '#fff';
}