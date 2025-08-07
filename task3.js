var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

var result = '';
for(const name of numbers){
   result = result.concat(name);
}
console.log(result);