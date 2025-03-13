function sortEvenNumbers(arr) {
    if(!Array.isArray(arr)){
        return "Không phải là mảng"
    }
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let evenIndex = 0;
    return arr.map(num => {
        if (num % 2 === 0) {
            return evenNumbers[evenIndex++];
        }
        return num;
    });
}
let arr = [5, 3, 2, 8, 1, 4];
let sortedArr = sortEvenNumbers(arr);
console.log(sortedArr);