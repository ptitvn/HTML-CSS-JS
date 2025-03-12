function isPrime(num) {
    if (num <= 1){
        return false;
    } 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
        } 
    }
    return true;
}

function filterOddPrimes(arr) {
    if (!Array.isArray(arr)) {
        console.log("Đầu vào không phải là mảng.");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng rỗng.");
        return;
    }
    const oddPrimes = arr.filter(num => isPrime(num) && num % 2 !== 0);
    console.log("Các số nguyên tố lẻ trong mảng là:", oddPrimes);
}
let arr = [];
for (let i = 0; i < 10; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`), 10);
    arr.push(input);
}
filterOddPrimes(arr);