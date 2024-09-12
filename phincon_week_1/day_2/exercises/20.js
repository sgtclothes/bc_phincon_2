function hitungHurufKapital(kalimat) {
    let jumlahHurufKapital = 0;
    for (const huruf of kalimat) {
        if (huruf >= "A" && huruf <= "Z") {
            jumlahHurufKapital++;
        }
    }
    return jumlahHurufKapital;
}
console.log(hitungHurufKapital("Saya Belajar JavaScript Di DICODING"));
