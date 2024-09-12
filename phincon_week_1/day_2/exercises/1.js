function hitungBilanganGanjil(n) {
    let jumlah = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            jumlah++;
        }
    }
    return jumlah;
}
console.log(hitungBilanganGanjil(10));
