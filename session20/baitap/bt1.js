let n = +prompt("mời bạn nhập vào số nguyên 1-n");
let sum = 0;
if(Number.isInteger(n) && n >0){
    for(let i=1; i <= n;i++){
        sum += i;
    }
    console.log(sum);
}else{
    console.log("dữ liệu nhập vào không hợp lệ");
}