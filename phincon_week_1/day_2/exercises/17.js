function cariBilanganGanjilTerbesar(arr) {
    const bilanganGanjil = arr.filter((num) => num % 2 !== 0);
    let bilanganTerbesar = null;
    if (bilanganGanjil.length > 0) {
        bilanganGanjil.reduce((previous, current) =>
            current > previous ? (bilanganTerbesar = current) : (bilanganTerbesar = previous)
        );
    }
    return bilanganTerbesar;
}
console.log(cariBilanganGanjilTerbesar([13, 2, 3, 4, 5, 6, 7, 8, 9]));
