function cekTahunKabisat(tahun) {
    if (tahun % 4 === 0) {
        if (tahun % 100 === 0) {
            if (tahun % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}
console.log(cekTahunKabisat(2024))