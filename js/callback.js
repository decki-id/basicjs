// Synchronous Callback

// function hello(name) {
//     alert(`Hello, ${name}!`);
// }

// function showMessage(callback) {
//     const name = prompt('Insert your name:');
//     callback(name);
// }

// showMessage(name => alert(`Hello, ${name}!`));


// Asynchronous Callback

// const students = [
//     {
//         "name": "Decki Herdiawan",
//         "id": "HDE-001",
//         "email": "deckiherdiawan@gmail.com",
//         "subject": "Information Systems",
//         "teacherID": 1
//     },
//     {
//         "name": "Sandhika Galih",
//         "id": "HDE-002",
//         "email": "sandhikagalih@unpas.ac.id",
//         "subject": "Information Systems",
//         "teacherID": 2
//     },
//     {
//         "name": "Doddy Ferdiansyah",
//         "id": "HDE-003",
//         "email": "doddy@gmail.com",
//         "subject": "Information Systems",
//         "teacherID": 3
//     }
// ];

// console.log("START!!!!");
// students.forEach(s => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(s.name);
// });
// console.log("FINISH!!!!");

// function getStudents(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.responseText);
//             } else {
//                 error(xhr.status);
//             }
//         }
//     }

//     xhr.open('GET', url, true);
//     xhr.send();
// }

// console.log("START!!!!");
// getStudents('students.json', results => {
//     // console.log(JSON.parse(results));
//     const students = JSON.parse(results);
//     students.forEach(s => console.log(s.name));
// }, (e) => {
//    console.log(e.responseText);
// });
// console.log("FINISH!!!!");

// JQuery
// console.log("START!!!!");
// $.ajax({
//     url: 'students.json',
//     success: (students) => {
//         students.forEach(s => console.log(s.name));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// });
// console.log("FINISH!!!!");