// Template Literals / Template Strings
// const name = 'Decki', age = 28;
// console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('Hello!')}`);
// const x = 10;
// console.log(`${(x % 2 === 0) ? 'even' : 'odd'}`);

// HTML Fragments
// const student = {
//     name: 'Decki Herdiawan Soepandi',
//     age: 28,
//     nrp: '160323012',
//     email: 'd.herdiawan.s@gmail.com'
// },
//     el = `<div class="student">
//         <h2>${student.name}</h2>
//         <span>${student.age}</span>
//         <span>${student.nrp}</span>
//         <span>${student.email}</span>
//         </div>`;
// console.log(el);

// Looping
// const student = [
//     {
//         name: 'Decki Herdiawan Soepandi',
//         email: 'd.herdiawan.s@gmail.com'
//     },
//     {
//         name: 'Sandhika Galih',
//         email: 'sandhikagalih@gmail.com'
//     },
//     {
//         name: 'Rizki Ramadhan',
//         email: 'rizkirama@yahoo.com'
//     }
// ],
//     el = `<div class="student">
//     ${student.map(m => `<ul>
//         <li> ${m.name}</li>
//         <li> ${m.email}</li>
//     </ul>`).join('')}
//     </div>`;
// document.body.innerHTML = el;

// Ternary Conditional
// const song = {
//     title: 'My Heart Will Go On',
//     artist: 'Celine Dion'
// },
//     el = `<div class="song">
//     <ul>
//         <li>${song.artist}</li>
//         <li>${song.title} ${song.feat ? `(feat. ${song.feat})` : ''}</li>
//     </ul>
//     </div>`;
// document.body.innerHTML = el;

// Nested HTML Fragments
const student = {
    name: 'Decki Herdiawan Soepandi',
    semester: 5,
    subjects: [
        'Web Programming',
        'Data Structure',
        'Algorithm',
        'Object Oriented Programming'
    ]
},
    el = `<div class="student">
    <h2>${student.name}</h2>
    <span class="smester">Semester: ${student.semester}</span>
    <h4>Subjects:</h4>
    ${printSubjects(student.subjects)}
    </div>`;
document.body.innerHTML = el;
function printSubjects(subjects) {
    return `
    <ol>
        ${subjects.map(m => `<li>${m}</li>`).join('')}
    </ol>
    `;
}