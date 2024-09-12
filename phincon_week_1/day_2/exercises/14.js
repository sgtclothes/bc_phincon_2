function konversiSuhu(suhu, jenis) {
    if (jenis === "C") {
        return (suhu * 9) / 5 + 32 + "F";
    } else if (jenis === "F") {
        return ((suhu - 32) * 5) / 9 + "C";
    } else {
        return "Jenis tidak valid";
    }
}
console.log(konversiSuhu(30, "C"));
console.log(konversiSuhu(86, "F"));
