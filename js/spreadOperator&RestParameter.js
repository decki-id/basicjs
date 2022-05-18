// Spread Operator

// spreadName = [...name];
// spreadStudentsTeachers = [...students, 'Zainudin', ...teachers];
// console.log(spreadName);
// console.log(spreadStudentsTeachers);

// let studentsCopy = [...students];
// studentsCopy[0] = 'Fajar';
// console.log(studentsCopy);
// console.log(students);

// let name = document.querySelector('.name'),
//     letter = [...name.textContent].map(l => `<span>${l}</span>`).join('');
// name.innerHTML = letter;

// function myFunc() {
//     return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));


// Rest Parameter

// function myFunc(...myArgs) {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     return arguments;
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function add(...number) {
//     // let total = 0;
//     // for (const a of number) {
//     //     total += a;
//     // }
//     // return total;
//     return number.reduce((a, b) => a + b);
// }
// console.log(add(1, 2, 3, 4, 5));

// array destructuring
// const
//     group1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'],
//     [chief, vice, ...members] = group1;
// console.log(members);

// object destructuring
// const
//     team = {
//         pm: 'Sandhika',
//         frontEnd1: 'Doddy',
//         frontEnd2: 'Erik',
//         backEnd: 'Fajar',
//         ux: 'Hendra',
//         devOps: 'Jaka'
//     },
//     { pm, ...myTeam } = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values) {
    return values.filter(val => typeof val === type);
}
console.log(filterBy('boolean', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));