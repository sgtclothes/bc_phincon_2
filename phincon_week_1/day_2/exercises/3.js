function hitungFaktorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * hitungFaktorial(n - 1);
    }
}
console.log(hitungFaktorial(10))