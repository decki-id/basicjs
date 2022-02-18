// destructuring return value

// function calculation(a, b) {
//     // return [a + b, a - b, a * b, a / b];
//     return {
//         add: a + b,
//         subtract: a - b,
//         multiply: a * b,
//         divide: a / b
//     }
// }

// // const
// //     add = calculation(100, 2536)[0],
// //     subtract = calculation(100, 2536)[1];
// //     multiply = calculation(100, 2536)[2];
// //     divide = calculation(100, 2536)[3];

// // const [add, subtract, multiply, divide] = calculation(2801, 2536);
// // const [add, subtract, multiply, divide = 'NULL'] = calculation(2801, 2536); // default value
// const { add, divide, multiply, subtract } = calculation(2801, 2536); // unordered destructuring

// console.log(add + ' | ' + subtract + ' | ' + multiply + ' | ' + divide);


// destructuring arguments

const student = {
    name: 'John',
    age: 30,
    email: 'decki@decki.com',
    points: {
        total: 100,
        current: 50,
        bonus: 10
    }
}

function printStudent({ name, age, email, points: { total, current, bonus } }) {
    return `Hello, my name is ${name}, I am ${age} years old and my email is ${email}. I have ${total} points and ${current} points left. I also have ${bonus} bonus points.`;
}

console.log(printStudent(student));