function isArithmeticSequence(arr) {
    if(!Array.isArray(arr)){
        return "Không phải là mảng"
    }
    if (arr.length <= 1) return true;

    const difference = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== difference) {
            return false;
        }
    }

    return true;
}
let array = [2, 4, 6, 8, 10];
console.log(isArithmeticSequence(array));
