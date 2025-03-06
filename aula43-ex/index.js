function numDivizivel (n) {

    const dv3 =  n % 3  
    const dv5 =  n % 5
    const dv3e5 = dv3 + dv5

    if (typeof n !== 'number') return n;
    if ( dv3e5 === 0 ) return "FizzBuZZ";
    if (dv3 === 0) return "Fizz";
    if (dv5 === 0) return "BuZZ";
    return n;
}

console.log('a', numDivizivel('a'))
for (let i = 0 ; i <= 100 ; i++){
    console.log(i, numDivizivel(i));
}