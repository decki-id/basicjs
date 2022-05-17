let arr = ["Decki", "Dea", "Surya", "Choerul"],
    students = ['Decki', 'Dea', 'Dinda'],
    teachers = ['Choerul', 'Endri', 'Jaka'];

// Make an array (manually)
// arr[0] = "Decki";
// arr[1] = "Dea";
// arr[3] = "Surya";
// arr[4] = "Choerul";

// Delete a content of an array (manually)
// arr[1] = undefined;
// console.log(arr);

// Show an array with loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Concatenate two arrays
// concatStudentsTeachers = students.concat(teachers);
// console.log(concatStudentsTeachers);

// Spread Operator
// spreadName = [...name];
// spreadStudentsTeachers = [...students, 'Zainudin', ...teachers];
let studentsCopy = [...students];
studentsCopy[0] = 'Fajar';
console.log(studentsCopy);
console.log(students);