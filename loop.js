let s = '',
    name = 'Decki',
    students = ['Decki', 'Dea', 'Dinda'],
    teachers = ['Choerul', 'Endri', 'Jaka'],
    liName = document.querySelectorAll('.name'),
    student = {
        name: 'Decki',
        age: '20',
        email: 'decki@decki.com'
    };

// Segitiga siku-siku
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }

// Segitiga siku-siku terbalik
// for (var i = 0; i < 10; i++) {
//     for (var j = 10; j > i; j--) {
//         s += '*';
//     }
//     s += '\n';
// }

// Segitiga "alas kiri"
// for (var i = 0; i < 20; i++) {
//     if (i < 10) {
//         for (var j = 0; j <= i; j++) {
//             s += '*';
//         }
//         s += '\n';
//     } else {
//         for (var k = 18; k >= i; k--) {
//             s += '*';
//         }
//         if (i < 19) {
//             s += '\n';
//         } else {
//             s += '';
//         }
//     }
// }

// Papan catur
// for (var a = 0; a < 10; a++) {
//     if (a % 2 === 0) {
//         for (var b = 0; b < 10; b++) {
//             if (b % 2 === 0) {
//                 s += '#';
//             } else {
//                 s += ' ';
//             }
//         }
//     } else {
//         for (var b = 0; b < 10; b++) {
//             if (b % 2 === 0) {
//                 s += ' ';
//             } else {
//                 s += '#';
//             }
//         }
//     }
//     s += '\n';
// }

// forEach (khusus untuk array)
// student.forEach(m => console.log(m));
// liName.forEach(n => console.log(n.textContent));

// for..of (array, string, NodeList, arguments)
// for (const m of student.entries()) {
//     console.log(m);
// }
// for (const n of name) {
//     console.log(n);
// }
// for (n of liName) {
//     console.log(n.innerHTML);
// }
// function addNumber() {
//     let total = 0;
//     for (a of arguments) {
//         total += a;
//     }
//     return total;
// }

// for..in
// for (m in student) {
//     console.log(m + ': ' + student[m]);
// }

console.log(s);