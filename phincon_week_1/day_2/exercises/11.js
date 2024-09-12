function hitungRataRata(arr) {
    return arr.reduce((previous, current) => previous + current) / arr.length;
}
console.log(hitungRataRata([2, 5, 10, 21, 22]));