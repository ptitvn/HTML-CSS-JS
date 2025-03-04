let n = +prompt("Mời bạn nhập số từ khoảng 1 -> n");
if(Number.isInteger(n) && n >=1){
    for(let i = 1; i <= n;i++){
        if(i%5===0){
            console.log(`số chia hết cho 5 từ 1 đến ${n} là ${i}`);
        }
    }
}else{
    console.log("dữ liệu không hợp lệ");
}
