function hitungJumlahKata(kalimat) {
    if (typeof kalimat !== "string") {
        return 0;
    }
    const kataArray = kalimat.trim().split(" ");
    return kataArray.length;
}
console.log(hitungJumlahKata("Selamat Pagi Semua"));