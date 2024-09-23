function hitungPangkat(angka, pangkat) {
    return new Array(pangkat).fill(angka).reduce((acc, current) => acc * current);
}
console.log(hitungPangkat(5, 5));