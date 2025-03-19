const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const aConcat = a1.concat(a2, [7, 8, 9], 'Leonanrdo');
console.log(aConcat);
const aSpread = [...a1, 'luiz', ...a2, ...[7, 8]];
console.log(aSpread);