for (let num = 100; num < 1000; num++) {
    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num % 100) / 10);
    let units = num % 10;
    let sumOfCubes = hundreds * hundreds * hundreds + tens * tens * tens + units * units * units;
    if (sumOfCubes === num) {
        console.log(num);
    }
}