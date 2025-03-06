function rand(min= 1000, max= 3000){
    const num = Math.random() * (min-max) + min;
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand())
}

//funções sem callback 
// f1();
// f2();
// f3();
// console.log('ola mundo!')

//funções com callback 
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log("ola mundo!")
//         })
//     })
// });

//mais um exemplo de função com callback mas com menos indentação 
f1(f1callback);

function f1callback(){
    f2(f2callback);
}

function f2callback() {
    f3(f3callback)
}

function f3callback() {
    console.log('ola mundo!')
}