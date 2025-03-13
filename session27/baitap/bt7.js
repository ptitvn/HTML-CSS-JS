function findMissingNumber(arr) {
    let n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arraySum;
}

let arr = [];
let n = +prompt("Mời bạn nhập số lượng phần tử muốn nhập vào mảng");
for(let i =0;i<n;i++){
    let elment = +prompt("Mời bạn nhập vào số thứ"+(i+1));
    arr.push(elment);
}
let missingNumber = findMissingNumber(arr);
console.log(`Số bị thiếu là: ${missingNumber}`);