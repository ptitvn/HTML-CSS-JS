function string (str){
    if(Array.isArray(str)){
        let result = str.filter((name)=>name.length >5);
        console.log(result);
    }
}
let array = [];
let number = +prompt("Mời bạn nhập số lượng phần tử muốn nhập vào mảng");
if(Number.isInteger(number)){
    for(let i =0;i<number;i++){
        let arr = prompt("Mời bạn nhập vào mảng");
        array.push(arr);
    }
    string(array);
}