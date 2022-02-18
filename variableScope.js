// Basic scope test (global & inside function)
// let a = 1;
// function test() {
//     let a = 2;
//     console.log(a);
// }
// test();
// console.log(a);

// For loop test
function test() {
    let s = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j <= i; j++) {
            s += '*';
        }
        s += '\n';
    }
    console.log(i);
}
test();

// So why var is not used anymore in JavaScript? I's because var is function scope, where as let and const are block scope.