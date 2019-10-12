const numbers = [1, 2, 3, 4];
const oddNumbers = numbers.filter(items => items % 2 === 1);// console.log(oddNumbers);

const newNumbers = oddNumbers.map(items=>{
    if (items % 2 === 1)
       return (items * 2)
});

console.log("The doubled numbers are", newNumbers);// returns [2, 6]