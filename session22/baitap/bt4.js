let input = +prompt("Nhập vào dãy số");
if(Number.isInteger(input) === false){
    console.log("Dãy không hợp lệ");
}else{
    let text = String(input);
    let array = text.split("");
    let max = array[0];
    for(let i = 0;i<array.length;i++){
        if(max<array[i]){
            max = array[i];
        }
    }
    console.log(`số lớn nhất là ${max}`);
}
    