// Prototype

// function Student(name, energy) {
//     this.name = name;
//     this.energy = energy;
// }

// Student.prototype.eat = function (portion) {
//     this.energy += portion;
//     return `Hello ${this.name}, enjoy your meal!`;
// }

// Student.prototype.play = function (hour) {
//     this.energy -= hour;
//     return `Hello ${this.name}, enjoy your time!`;
// }

// Student.prototype.sleep = function (hour) {
//     this.energy += hour * 2;
//     return `Hello ${this.name}, sleep tight!`;
// }

// let decki = new Student('Decki', 10);


// Class

class Student {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eat(portion) {
        this.energy += portion;
        return `Hello ${this.name}, enjoy your meal!`;
    }

    play(hour) {
        this.energy -= hour;
        return `Hello ${this.name}, enjoy your time!`;
    }

    sleep(hour) {
        this.energy += hour * 2;
        return `Hello ${this.name}, sleep tight!`;
    }
}

let decki = new Student('Decki', 10);
console.log(decki);