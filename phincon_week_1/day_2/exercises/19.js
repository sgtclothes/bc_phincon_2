function cekAnagram(word1, word2) {
    let sortedWord1 = word1.replace(/\s/g, "").toLowerCase().split("").sort().join("");
    let sortedWord2 = word2.replace(/\s/g, "").toLowerCase().split("").sort().join("");
    return sortedWord1 === sortedWord2;
}
console.log(cekAnagram("listen", "silent"));
console.log(cekAnagram("hello", "world"));
