const numbers = [1, 2, 3, 4];
const newNumbers = numbers.filter(items => items % 2 === 1).map(items=>items * 2);

console.log("The doubled numbers are", newNumbers);// returns [2, 6]

