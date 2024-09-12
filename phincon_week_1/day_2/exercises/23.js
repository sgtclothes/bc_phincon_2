function hitungKataUnik(kalimat) {
    const kataArray = kalimat.toLowerCase().split(" ");
    const kataUnik = new Set(kataArray);
    return kataUnik.size;
}
console.log(hitungKataUnik("Saya suka makan nasi suka minum air"));