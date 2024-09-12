function hitungJumlahHari(tanggalAwal, tanggalAkhir) {
    const dateAwal = new Date(tanggalAwal);
    const dateAkhir = new Date(tanggalAkhir);
    const selisihWaktu = dateAkhir - dateAwal;
    const jumlahHari = selisihWaktu / (1000 * 60 * 60 * 24);
    return jumlahHari;
}
const tanggal1 = "2024-09-01";
const tanggal2 = "2024-09-12";
console.log(hitungJumlahHari(tanggal1, tanggal2));
