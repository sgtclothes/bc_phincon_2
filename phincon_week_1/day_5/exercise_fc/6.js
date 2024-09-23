function cekPalindrom(kata) {
    let kataBalik = kata.split("").reverse().join("");
    return kata.toLowerCase() === kataBalik.toLowerCase();
}
console.log(cekPalindrom("Katak"));
