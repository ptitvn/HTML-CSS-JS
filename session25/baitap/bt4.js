function  number(n){
    let flag =0;
    if(Number.isInteger(n) && n <100 && n>1){
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0){
                 flag++;
            }
        }
        flag == 0? console.log("là số nguyên tố"):console.log("không là số nguyên tố");
    }else{
        console.log("Dữ liệu nhập vào không hợp lệ");
    }

}
let n = +prompt("Mời bạn nhập vào 1 số nguyên tố");
number(n);