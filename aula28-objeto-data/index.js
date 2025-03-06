// Mostra a data atual
//show the current date
const date = new Date(); // fuso horaripo UTC
const date2 = new Date(); // horario local 
const date3 = new Date('2024-04-20 19:25:59'); 

console.log(date)
console.log(date2.toString())

console.log('Date', date3.getDate());
console.log('Month', date3.getMonth() + 1); // Mês começa com 0
console.log('Year', date3.getFullYear());
console.log('Hours', date3.getHours());
console.log('Minutes', date3.getMinutes());
console.log('Seconds', date3.getSeconds());
console.log('Milliseconds', date3.getMilliseconds());
console.log('Day week', date3.getDay()); // 0 - Domingo, 6 - Sábado
console.log(date3.toString())

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const horas = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getMinutes());

    return ` ${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}

const data = new Date();
const dataBrasil = formataData (data);
console.log(dataBrasil);
