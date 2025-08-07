const numbers = [12, 98, 5, 41, 23, 78, 46];
numbers[5] = 76;
console.log(numbers);

const newNumbers = [];

for (let i = 0; i <= numbers.length; i++){
    if(numbers[i] % 2 === 0){
        newNumbers.push(numbers[i]);
    }
}
console.log(newNumbers);

