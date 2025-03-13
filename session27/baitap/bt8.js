function largestNumberFromDigits(num) {
    let numStr = num.toString();
    
    let sortedNumStr = numStr.split('').sort((a, b) => b - a).join('');
     
    return parseInt(sortedNumStr, 10);
}
let num = 12345;
console.log(largestNumberFromDigits(num));