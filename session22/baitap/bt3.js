let input = +prompt("Nhập vào dãy số");
if(Number.isInteger(input)===false){
    console.log("Dãy không hợp lệ");
}else{
    let text = String(input);
    let array = text.split("");
    let reversedArray = array.reverse();
    console.log("Mảng sau khi đảo ngược: " + reversedArray);
}
    