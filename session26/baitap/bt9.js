function calculateSums(arr) {
    if(arr.length===0){
        return "Mảng rỗng"
    }
    let evenSum = arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
    let oddSum = arr.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
    console.log(`Tổng các số chẵn: ${evenSum}`);
    console.log(`Tổng các số lẻ: ${oddSum}`);
    return  evenSum, oddSum ;
}
function inputArray() {
    let arr = [];
    let n = +prompt("Nhập số lượng phần tử của mảng (từ 10 đến 20):");
    if (n < 10 || n > 20 && Array.isArray(n)) {
        alert("Số lượng phần tử phải từ 10 đến 20.");
        return inputArray();
    }
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(parseInt(num));
    }
    return arr;
}
let arr = inputArray();
calculateSums(arr);

