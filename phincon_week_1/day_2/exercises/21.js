function cariBilanganHilang(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arrSum;
}
