function hitungKemunculanKata(kalimat, kata) {
    let kataPanjang = kata.length;
    return kalimat.split("").reduce((jumlah, _, i) => {
        return kalimat.slice(i, i + kataPanjang) === kata ? jumlah + 1 : jumlah;
    }, 0);
}
console.log(hitungKemunculanKata("Saya suka makanmakanmakanmakan nasi, saya juga suka minum air", "makan"));