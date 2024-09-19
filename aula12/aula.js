let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varaa= varA
varA = varB
varB = varC
varC = varaa

console.log(varA, varB, varC);

// ou

let var1 = 'A'; // B
let var2 = 'B'; // C
let var3 = 'C'; // A

[var1, var2, var3] = [var2, var3, var1]

console.log(var1, var2, var3);
