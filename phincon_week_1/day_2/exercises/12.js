function hitungJumlahVokal(kata) {
    let length = 0;
    kata.split("").map((letter) => (["a", "i", "u", "e", "o"].includes(letter.toLowerCase()) ? length++ : length));
    return length;
}
console.log(hitungJumlahVokal("Ada apa dengan kamu"));
