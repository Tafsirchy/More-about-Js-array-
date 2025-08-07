const numbers = [1,2,3,4,5,6,7,8,9,10];
const tournament_runs = [[], [], []];
const exam_marks = [
    [98, 87, 45, 12, 63],
    [54, 89, 74, 23, 11],
    [45, 87, 12, 56, 43],
    [78, 65, 32, 87, 54],
]
// console.log(numbers[0]);
// console.log(exam_marks[0]);

const firstClassMarkes = exam_marks[0];

console.log(firstClassMarkes);
console.log(firstClassMarkes[1]);

// console.log(exam_marks[0][1]);

exam_marks[0][1] = 100;
exam_marks[1].pop();
exam_marks[1].push(90);

// console.log(exam_marks);

for(const marks of exam_marks){
    // console.log(marks);
    console.log(marks);
    
}


