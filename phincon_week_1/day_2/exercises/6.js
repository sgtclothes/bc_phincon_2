function isPalindromeWithReverse(word) {
    const lowerCaseWord = word.toLowerCase();
    const reversedWord = lowerCaseWord.split("").reverse().join("");
    return lowerCaseWord === reversedWord;
}

function isPalindromeWithFor(word) {
    let lower = word.toLowerCase();
    let reverseWord = [];
    for (let index = lower.length - 1; index > -1; index--) {
        reverseWord.push(lower[index]);
    }
    reverseWord = reverseWord.join("");
    return lower === reverseWord;
}

console.log(isPalindromeWithReverse("katak"))
console.log(isPalindromeWithFor("katak"))