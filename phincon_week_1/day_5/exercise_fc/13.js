function mencariFaktorBilangan(angka) {
    let faktor = [];
    new Array(angka).fill(null).forEach((value, i) => {
        if (angka % i === 0) {
            faktor.push(i);
        }
    });
    return faktor;
}

const hasil = mencariFaktorBilangan(20);

console.log(hasil);
