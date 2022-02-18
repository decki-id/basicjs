// Literal
// Problem: Uneffective for creating lots of objects.
let student = {
    name: "Decki Herdiawan Soepandi",
    age: 28,
    ips: [3.00, 2.50, 3.20],
    address: {
        road: "Jl. Citra Asri Blok B-11",
        city: "Padalarang",
        province: "West Java"
    },
    halo: function () {
        console.log(this);
    } // make method for student object from inside the student object
}
// student.halo = function () {
//     console.log(this);
// } // make method for student object from outside the student object
student.halo();
console.log(student);


// Function Declaration
// function studentObject(name, nrp, email, major) {
//     let student = {};
//     student.name = name;
//     student.nrp = nrp;
//     student.email = email;
//     student.major = major;
//     return student;
// }
// let student2 = studentObject("Benny Sudaryanto", "123456789", "benny@yahoo.com", "Information Systems");
// console.log(student2);


// Constructor
// function Student(name, nrp, email, major) {
//     this.name = name;
//     this.nrp = nrp;
//     this.email = email;
//     this.major = major;
// }
// let student3 = new Student("Ruby Agustriyanto", "987321654", "rubyruby@gmail.com", "Information Systems");
// console.log(student3);