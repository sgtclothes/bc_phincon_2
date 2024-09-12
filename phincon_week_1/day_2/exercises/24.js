function findUniqueNumbers(arr) {
    const frequency = {};
    arr.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    return Object.keys(frequency)
        .filter((key) => frequency[key] === 1)
        .map(Number);
}
console.log(findUniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
