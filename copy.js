let price = 25;
let comp_price = price;

price = 12;
comp_price = 15;

console.log(price);
console.log(comp_price);

const products = [25, 25, 25];
const comp_products = [];
// const comp_products = products;

// fokira system 
for(const product of products){
    comp_products.push(product);
}

comp_products[0] = 12;
products[0] = 55;

// console.log(products);
// console.log(comp_products);

const numbers = [1,2,3,4,5];

// const newNumbers = Array.from(numbers);
// const newNumbers = [].concat(numbers);
const newNumbers = [...numbers];

// newNumbers.push(6);
// newNumbers.push(18);
// newNumbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);

// Shallow copy vs Deep copy