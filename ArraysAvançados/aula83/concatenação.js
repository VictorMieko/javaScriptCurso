const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
let a3 = a1.concat(a2, [7, 8, 9], 'Luiz');//metodo para concatenação de arrays

console.log(a3);

//...rest -> ... spread
a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a3);
