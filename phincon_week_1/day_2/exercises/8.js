function deretFibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo.slice(0, n);
}
console.log(deretFibonacci(20));
