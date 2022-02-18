// const
//     introducing = ['Hello,', 'my', 'name', 'is', 'John Doe.'],
//     // [greeting, , , , name] = introducing; // skip items
//     [greeting, one, two, three, name] = introducing;
// console.log(greeting, one, two);

// let a = 1, b = 2;
// [a, b] = [b, a]; //swap items
// console.log(a, b);

// function tryReturn() {
//     return [1, 2];
// }
// const [a, b] = tryReturn(); // function return
// console.log(a, b);

// const [a, ...values] = [1, 2, 3, 4, 5]; // rest parameter
// console.log(values[3]);

// ({ name, age } = { name: 'John', age: 30 }); // object assignment without declaration
// console.log(name);

const student = {
    id: 147,
    name: 'John',
    age: 30,
    email: 'decki@decki.com'
}
// const { id: i, name: n, age: a } = student; // assign object to new variable
// const { id: i, name: n, age: a, email: e = 'email@default.com' } = student; // set default value
const { id: i, ...values } = student; // rest parameter
console.log(values['email']);