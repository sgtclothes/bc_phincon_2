function cariFaktorBilangan(angka) {
    let faktor = [];
    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            faktor.push(i);
        }
    }
    return faktor;
}
console.log(cariFaktor(36));