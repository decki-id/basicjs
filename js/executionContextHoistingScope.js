// Execution Context, Hoisting, Scope


// Creation phase on global context

// console.log(name);
// var name = 'Decki';

// name variable = undefined
// name function = fn()
// hoisting => move name variable to the top of the global context and set the value to undefined (var key only), same with name function.
// window = global object
// this = window


// Execution phase on global context

// var name = 'Decki',
//     age = 28;

// console.log(sayHello());

// function sayHello() {
//     return `Hello, my name is ${name} and I am ${age} years old.`;
// }

// function make Local Execution Context which contains creation and execution phase
// window
// arguments
// hoisting (local)

// var name = 'Decki Herdiawan Soepandi',
//     username = 'deckideckidecki';

// function printURL() {
//     // console.log(arguments); // if this function doesn't have arguments, the arguments requested below will be assigned to arguments object of this function
//     var instagramURL = 'https://www.instagram.com/';
//     return instagramURL + username;
// }

// console.log(printURL('sandhikagalih'));

// function a() {
//     console.log('Ini a.');

//     function b() {
//         console.log('Ini b.');

//         function c() {
//             console.log('Ini c.');
//         }

//         c();
//     }

//     b();
// }

// a();