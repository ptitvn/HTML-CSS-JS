let n = +prompt("Mời bạn nhập số lớn hơn 1");
let a =1;b=1;
let result = " ";
if(Number.isInteger(n) && n>=1){
    for (let i = 0; i < n; i++) {
        result += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
    }
    console.log(result);
}