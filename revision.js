/**
 * 1. const --> values cannot be changed
 * 2. let --> values can be changed
 * 3. var --> values can be changed/should not be used in exceptional cases
 */

const price = 100;//number
console.log(price);
const name = 'Tafsir';//string
console.log(name);
const isHappy = true;//boolean
console.log(isHappy);
const numbers = [1,2,3,4,5];//array
console.log(numbers);
const friends = ['hamim', 'tanim','mohi','shohag','arafat', 'maruf'];
console.log(friends);
const student = {
    name: 'Tafsir',
    age: 23,
    isGraduated: true,
    id: 123456,
    phone: 01754567890,
    address: 'Dhaka',
    friends: ['hamim', 'tanim','mohi','shohag','arafat', 'maruf'],
}//object

console.log(student);

// conditions --> if, else if, else


if (price > 100) {
    console.log('I will buy it');
}
else {
    console.log('I will not buy it');
}

if (price > 100) {
    console.log('I can buy it');
}
else if (price > 50) {
    console.log('I will buy it');
}
else {
    console.log('I will not buy it');
}


// loop --> for, while, do while

let pushUp = 0;
while (pushUp < 10) {
    console.log('Push up', pushUp);
    pushUp++;
}

for (let pushUp = 0; pushUp < 10; pushUp++) {
    console.log('Push up', pushUp);
}