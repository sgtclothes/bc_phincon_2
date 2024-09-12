function hitungKemunculanKarakter(str) {
    const hasil = {};
    for (let char of str) {
        if (hasil[char]) {
            hasil[char]++;
        } else {
            hasil[char] = 1;
        }
    }
    return hasil;
}
console.log(hitungKemunculanKarakter("hello world"));
