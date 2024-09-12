function hitungJumlahDigit(angka) {
    const angkaString = angka.toString();
    return angkaString.startsWith("-") ? angkaString.length - 1 : angkaString.length;
}
console.log(hitungJumlahDigit(2179))