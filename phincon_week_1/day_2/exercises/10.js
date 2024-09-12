function cariBilanganTerbesar(arr) {
    return arr.reduce((previous, current) => (previous > current ? previous : current));
}
console.log(cariBilanganTerbesar([2, 20, 3, 4, 100, 105, 20, 21, 22]));
