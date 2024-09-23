function isPalindromeWithReverse(word) {
    const lowerCaseWord = word.toLowerCase();
    const reversedWord = lowerCaseWord.split("").reverse().join("");
    return lowerCaseWord === reversedWord;
}

function isPalindromeWithFor(word) {
    let lower = word.toLowerCase();
    let reverseWord = "";
    for (let index = lower.length - 1; index > -1; index--) {
        reverseWord += lower[index];
    }
    return lower === reverseWord;
}

console.log(isPalindromeWithReverse("katAK"))
console.log(isPalindromeWithFor("katak"))