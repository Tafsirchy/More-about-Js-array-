const numbers = [5, 2, 4, 1, 3];

// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ['hamim', 'tanim','mohi','shohag','arafat', 'maruf'];
friends.sort();
// console.log(friends);


const ages = [23, 2, 45, 34, 56, 78, 90, 101];
// console.log(ages);
// ages.sort();
// console.log(ages);

const sortedAges = ages.sort(function (a, b) {return a - b})
console.log(sortedAges);

// desc 
const sortedAgesDesc = ages.sort(function (a, b){ return b-a});
console.log(sortedAgesDesc);