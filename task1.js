const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const newColors = [];


// for (let i = colors.length-1; i>=0; i--){
//     console.log(newColors);
//     newColors.push(colors[i]);
// }
//     // console.log(newColors);

for(let i = 0; i < colors.length; i++){
    newColors.unshift(colors[i]);
}
// console.log(newColors);

const newColors2 = [...colors.reverse()];
// console.log(newColors2);