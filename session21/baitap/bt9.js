let n = +prompt("Mời bạn nhập vào số bất kỳ");
let flag =0;
if(Number.isInteger(n) && n <100 && n>1){
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0){
            flag++;
        }
    }
    flag == 0? console.log(n +"là số nguyên tố"):console.log("không là số nguyên tố");
}