const numbers = [1,7,3,2,45,32,56];
const players = [ {}, {}, {}];
const employees = [
    {name: 'Tafsir', designation: 'Web Developer', salary: 50000},
    {name: 'Tanim', designation: 'Civil Engineer', salary: 55000},
    {name: 'Mohi', designation: 'Marketer', salary: 50000},
    {name: 'Shohag', designation: 'Web Developer', salary: 30000},
    {name: 'Arafat', designation: 'Business man', salary: 500000},
    {name: 'Maruf', designation: 'Gammer', salary: 150000},
]
// console.log(employees);

employees[0].name = 'Tasfir';
// console.log(employees[1]);
// console.log(employees[1].salary)

// console.log(employees[3].designation);

for (const employee of employees){
    // console.log(employee);
    console.log(employee.salary, employee.designation);
}

for(const emp of employees){
    const person = emp;
    const personInfo = person.name + ': ' + person.salary;
    console.log(personInfo);
}