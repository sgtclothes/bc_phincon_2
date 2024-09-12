function hitungJumlahDigitGenap(angka) {
    const angkaStr = angka.toString();
    let jumlahGenap = 0;
    for (let i = 0; i < angkaStr.length; i++) {
        const digit = parseInt(angkaStr[i]);
        if (digit % 2 === 0) {
            jumlahGenap++;
        }
    }
    return jumlahGenap;
}
console.log(hitungJumlahDigitGenap(1234567890));
