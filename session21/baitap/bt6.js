let number = +prompt("Mời bạn nhập vào 1 số nguyên");
if(Number.isInteger(number) && number!=0){
    console.log(`Các ước của số ${number} là:`);
    for (let i = 1; i <= Math.abs(number) ; i++) {
        if (number % i === 0) {
            console.log(i);
            console.log(-i);
        }
    }
}else{
    console.log("Không hợp lệ");
}