function hitungJumlahVokal(kata) {
    const vokal = "aeiou";
    let jumlah = 0;

    for (let char of kata.toLowerCase()) {
        if (vokal.includes(char)) {
            jumlah++;
        }
    }

    return jumlah;
}

console.log(hitungJumlahVokal("javascript"));
