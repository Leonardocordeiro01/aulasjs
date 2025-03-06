const numero = Number(prompt('digite um numero:')); //prompt sempre retorna uma string 
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu número +2 é ${numero + 2}. </p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p>É NAN? ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}. </p>`;