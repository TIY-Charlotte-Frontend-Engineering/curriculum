// Print out everyone's name along with their corresponding grade.

let students = ['Fred', 'Jeb', 'Sansa'];
let grades = ['A', 'C', 'B'];

// Desired output:
//   3 students
//   - Fred: A
//   - Jeb: C
//   - Sansa: B

// console.log(students.length + ' students');
// console.log(students[0] + ': ' + grades[0]);
// console.log(students[1] + ': ' + grades[1]);
// console.log(students[2] + ': ' + grades[2]);

// Print out 0, 1, 2
// for (let i = 0; i < students.length; i = i + 1) {
//     console.log(i);
// }

for (let i = 0; i < students.length; i = i + 1) {
    console.log(students[i] + ': ' + grades[i]);
}

// Print out 'hi' five times
// for (let i = 0; i < 5; i++) {
//     console.log('hi');
// }

// let students = ['Jeb', 'Frank', 'Sinas'];
// for (let i = 0; i < students.length; i = i + 2) {
//     console.log(students[i]);
// }

// Given a list of numbers, add all numbers < threshold to a new 
// array called keepers.
let numbers = [5, 11, 4, 2, 19, 31, 44];
let threshold = 12;
let keepers = [];

// if array item zero is less than five, print it 
// move on to the next number 
// continue for each item of numbers (numbers.length)

// a
for (let i = 0; i < numbers.length; i++) {
    // b
    if (numbers[i] < threshold) {
        console.log(numbers[i]);
        keepers.push(numbers[i]);
    }
}

console.log(keepers);
// c

// 'Infinite loop'
for (let i = 0; i < 5; i--) {
    console.log('hmm');
}