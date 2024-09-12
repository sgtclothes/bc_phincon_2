function hitungKarakterUnik(str) {
    let karakterUnik = new Set();
    for (let char of str) {
        karakterUnik.add(char);
    }
    return karakterUnik.size;
}
console.log(hitungKarakterUnik("Halo dunia"));
