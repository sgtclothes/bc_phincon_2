function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
function hitungKombinasi(n, r) {
    if (r > n) {
        return 0;
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
}
console.log(hitungKombinasi(5, 3));
