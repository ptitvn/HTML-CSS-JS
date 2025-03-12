function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
function filterPrimes(arr) {
    return arr.filter(isPrime);
}

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let primeNumbers = filterPrimes(numbers);
console.log(primeNumbers);