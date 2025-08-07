numbers = [1, 2, 3];
console.log(numbers);

newNumbers = Array.from(numbers);
// console.log(newNumbers);

newNumbers[0] = 99;
console.log(newNumbers);

const newNumbers2 = [].concat(newNumbers);
console.log(newNumbers2);

const newNumbers3 = [...numbers];
console.log(newNumbers3);