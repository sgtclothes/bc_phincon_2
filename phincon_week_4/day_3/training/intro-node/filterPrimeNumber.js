const _ = require("lodash");

let generateNumbers = (maxNum) => {
    let array = [];
    for (let index = 1; index <= maxNum; index++) {
        array.push(index);
    }
    return array;
};

let isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
};

function filterPrimeNumber(nums) {
    return _.filter(nums, isPrime);
}

module.exports = { filterPrimeNumber, generateNumbers };
