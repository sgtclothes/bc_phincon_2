const _ = require("lodash");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const students = ["Rifqi", "Danty", "David", "Ojan", "Reza", "Intan"];

const newArray = _.chunk(array, 3);
console.log(newArray);

const removeOddNumber = (array) => {
    const newArray = _.filter(array, (n) => n % 2 === 0);
    return newArray;
};

const getAllStudentsWithALetter = (array, letter) => {
    let newStudents = [];
    array.forEach((a) => {
        newStudents.push(a.toLowerCase());
    });
    const newArray = _.filter(newStudents, (student) => student.includes(letter.toLowerCase()));
    return newArray;
};

console.log(removeOddNumber(array));
console.log(getAllStudentsWithALetter(students, "I"));
