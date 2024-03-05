function fibonacci(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

const n = 10; // Ganti dengan jumlah elemen Fibonacci yang diinginkan
const fibonacciSeries = fibonacci(n);
console.log(`Deret Fibonacci dengan ${n} elemen: ${fibonacciSeries.join(', ')}`);
