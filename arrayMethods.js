let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let unorderedNumbers = [2, 7, 9, 1, 6, 3, 10, 4, 8, 5];
let names = ['Choerul', 'Dea', 'Decki', 'Ekklesia'];
let unorderedNames = ['Bobby', 'Surya', 'Indah', 'Sintia', 'Adi', 'Zaid'];
let myName = ["Decki", "Herdeweiawan", "Soepandi"];

// length => count the contents of the array
// namesLength = names.length; // the result can be inserted to a variable
// console.log(namesLength);
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// } // it usually used in a loop

// join => show array data as a string (the default separator is comma)
// nameJoin = names.join(', '); // the result can be inserted to a variable
// console.log(nameJoin);

// push => insert data into the last index of the array
// namesPush = names.push('Endri', 'Jaka', 'Novi'); // the result can be inserted to a variable
// console.log(namesPush); // the result itself is the length of the pushed array
// names.push('Endri', 'Jaka', 'Novi'); // it can push one or more data into the array
// console.log(names);

// pop => delete the last index of the array
// names.pop(); // it can only used one at a time
// names.pop();
// console.log(names);

// unshift => insert data into the first index of the array
// namesUnshift = names.unshift('Adit', 'Aji', 'Bobby'); // the result can be inserted to a variable
// console.log(namesUnshift); // the result itself is the length of the unshifted array
// names.unshift('Adit', 'Aji', 'Bobby'); // it can unshift one or more data into the array
// console.log(names);

// shift => delete the first index of the array
// names.shift(); // it can only be used once at a time
// names.shift();
// console.log(names);

// splice => delete and/or insert data into the specific index of the array
// names.splice(1, 0, 'Herawati'); // it can only be used once at a time
// console.log(names);

// slice => copy the data from the specific index of the array
// namesSlice = names.slice(0, 2); // should be used with a variable to contain the result
// console.log(namesSlice);

// sort => sort the data in the array
// unorderedNames.sort();
// console.log(unorderedNames);
// unorderedNumbers.sort((a, b) => a - b);
// console.log(unorderedNumbers);

// reverse => Reverse the array (just reversing, not also sorting)
// namesReverse = names.reverse(); // the result can be inserted to a variable
// console.log(namesReverse);

// forEach
// numbers.forEach(e => console.log(e * 2));
// names.forEach((e, i) => console.log('Mahasiswa ke-' + (i + 1) + ' adalah: ' + e));

// map (higher order function)
// let numbersMap = numbers.map(e => e + 1000);
// console.log(numbersMap);

// filter (higher order function)
// let unorderedNumbersFilter = unorderedNumbers.filter(e => e < 5);
// console.log(unorderedNumbersFilter);

// find
// let unorderedNamesFind = unorderedNames.find(e => e === 'Sintia');
// console.log(unorderedNamesFind);

// reduce (higher order function)
// const newUnorderedNumbers = unorderedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newUnorderedNumbers);

// method chaining (higher order function)
// const result = unorderedNumbers.filter(a => a > 5).map(a => a * 3).reduce((acc, cur) => acc + cur);
// console.log(result);