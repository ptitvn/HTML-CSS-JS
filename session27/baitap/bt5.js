function splitArrayIntoChunks(array, n) {
    if (!Array.isArray(array) || typeof n !== 'number' || n <= 0) {
        return ('Tham số không hợp lệ');
    }

    let result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array.slice(i, i + n));
    }
    return result;
}
let array = [];
let arr = +prompt("Mời bạn nhập số lượng phần tử muốn nhập vào mảng");
for(let i =0;i<arr;i++){
    let elment = +prompt("Mời bạn nhập vào số thứ"+(i+1));
    array.push(elment);
}
let number = +prompt("Mời bạn nhập vào số lượng phần tử con");
console.log(splitArrayIntoChunks(array,number));