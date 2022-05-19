// Promise: An object that represents the eventual completion or failure of an asynchronous operation in the future.
// states (fulfilled/rejected/pending)
// callback (resolve/reject/finally)
// action (then/catch)

// API request with Vanilla JavaScript Fetch that returns a promise
// fetch('http://www.omdbapi.com/?apikey=a21203d5&s=avengers').then(response => response.json()).then(response => console.log(response));

let resolved = true;

// Example 1
// const promise1 = new Promise((resolve, reject) => {
//     if (resolved) {
//         resolve('Promise is resolved!');
//     } else {
//         reject('Promise is rejected!');
//     }
// });
// promise1.then(response => console.log('OK!: ' + response)).catch(response => console.log('NOT OK!: ' + response));

// Example 2
// const promise2 = new Promise((resolve, reject) => {
//     if (resolved) {
//         setTimeout(() => {
//             resolve('Promise is resolved after a period of time!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Promise is not resolved after a period of time!');
//         }, 2000);
//     }
// });
// console.log('START!');
// // console.log(promise2.then(() => console.log(promise2)));
// promise2.finally(() => console.log('Finish waiting.')).then(response => console.log('OK!: ' + response)).catch(response => console.log('NOT OK!: ' + response));
// console.log('FNISH!');

// Promise.all()
// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             title: 'Avengers: Infinity War',
//             director: 'Anthony Russo',
//             actors: 'Robert Downey Jr., Tom Holland, Chris Evans, Chris Hemsworth'
//         }]);
//     }, 1000);
// });
// const weather = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             city: 'New York',
//             temperature: '30',
//             weather: 'Sunny'
//         }]);
//     }, 500);
// });
// film.then(response => console.log(response)); // Show the faster response first
// weather.then(response => console.log(response)); // Show the faster response first
// Promise.all([film, weather]).then(response => console.log(response)); // Arrays in an array
// Promise.all([film, weather]).then(response => { // Spreaded arrays
//     const [film, weather] = response;
//     console.log(film);
//     console.log(weather);
// });