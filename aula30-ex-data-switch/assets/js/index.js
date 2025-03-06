// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`
// }

// function formataData(data) {
//     const dia = data.getDay();// dia de semana 
//     const diaTex = getWelkDaytext(dia);
//     const dMes = zeroEsquerda(data.getDate());// dia do mes
//     const mes = data.getMonth();// mes
//     const mesTex = getMonthDayText(mes);
//     const ano = data.getFullYear();// ano 
//     const hora = zeroEsquerda(data.getHours());// hora
//     const minuto = zeroEsquerda(data.getMinutes());// minuto

//     return `${diaTex}, ${dMes} de ${mesTex} de ${ano} ${hora}:${minuto}`
// }

// function getWelkDaytext(welkDay) {
//     let welkDayText

//     switch (welkDay) {
//         case 0:
//             welkDayText = 'Domingo';
//             return welkDayText;
//         case 1:
//             welkDayText = 'Segunda';
//             return welkDayText;
//         case 2:
//             welkDayText = 'terça';
//             return welkDayText;
//         case 3:
//             welkDayText = 'Quarta';
//             return welkDayText;
//         case 4:
//             welkDayText = 'Quinta';
//             return welkDayText;
//         case 5:
//             welkDayText = 'Sexta';
//             return welkDayText;
//         case 6:
//             welkDayText = 'Sabado';
//             return welkDayText;
//         default:
//             welkDayText = '';
//             return welkDayText;
//     }
// }

// function getMonthDayText(montDay) {
//     let montDayText

//     switch (montDay) {
//         case 0:
//             montDayText = 'Janeiro';
//             return montDayText;
//         case 1:
//             montDayText = 'Fevereiro';
//             return montDayText;
//         case 2:
//             montDayText = 'Março';
//             return montDayText;
//         case 3:
//             montDayText = 'Abril';
//             return montDayText;
//         case 4:
//             montDayText = 'Maio';
//             return montDayText;
//         case 5:
//             montDayText = 'Junho';
//             return montDayText;
//         case 6:
//             montDayText = 'Julho';
//             return montDayText;
//         case 7:
//             montDayText = 'Agosto';
//             return montDayText;
//         case 8:
//             montDayText = 'Setembro';
//             return montDayText;
//         case 9:
//             montDayText = 'Outubro';
//             return montDayText;
//         case 10:
//             montDayText = 'Novembro';
//             return montDayText;
//         case 11:
//             montDayText = 'Dezembro';
//             return montDayText;
//         default:
//             montDayText = '';
//             return montDayText;
//     }
// }

// const data = new Date();
// const dataBrasil = formataData(data); 
// document.querySelector('.container h1').textContent = dataBrasil;

// Poderia usar array que ja ficaria muito melhor, mas a intenção era exercitar 

// Melhor forma 

const h1 = document.querySelector('.container h1');
const data =  new Date();
h1.innerHTML = data.toLocaleDateString('pt-br', {dateStyle : 'full', timeStyle : 'short'})