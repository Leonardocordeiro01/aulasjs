function getWelkDaytext (welkDay) {
    let welkDayText
    
    switch (welkDay) {
        case 0:
            welkDayText = 'Domingo';
            return welkDayText;
        case 1:
            welkDayText = 'Domingo';
            return welkDayText;
        case 2:
            welkDayText = 'terça';
            return welkDayText;
        case 3: 
            welkDayText = 'Quarta';
            return welkDayText;
        case 4:
            welkDayText = 'Quinta';
            return welkDayText;
        case 5:
            welkDayText = 'Sexta';
            return welkDayText;
        case 6:
            welkDayText = 'Sabado';
            return welkDayText;
        default:
            welkDayText = '';
            return welkDayText;
    }
} 

const date = new Date('1987-04-21 00:00:00');
const welkDay = date.getDay();
const welkDayText = getWelkDaytext(welkDay);


// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sabado';
// } else {
//      diaSemanaTexto = '';
//}


console.log(welkDay, welkDayText);