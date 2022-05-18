// function init() {
//     let name = 'Decki';

//     function showName() {
//         console.log(name + ' ' + arguments[0] + ' ' + arguments[1]); // name = 'Decki' (Closure)
//     }

//     // console.dir(showName); // show the object of showName function
//     return showName;
// }

// // init();
// let callName = init();
// callName('Herdiawan', 'Soepandi');


// function saySalam(time) {
//     return function (name) {
//         console.log(`Hello ${name}, good ${time}, have a good time!`);
//     }
// }

// let goodMorning = saySalam('morning');
// let goodAfternoon = saySalam('afternoon');
// let goodEvening = saySalam('evening');

// // goodMorning('Decki');
// // goodEvening('Decki');
// console.dir(goodAfternoon);


// let add = (() => {
//     let counter = 0;
//     return () => {
//         return ++counter;
//     };
// })();

// console.log(add());
// console.log(add());
// console.log(add());