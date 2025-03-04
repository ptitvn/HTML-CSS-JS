let a = +prompt("Mời bạn nhập vào số thứ1");
let b = +prompt("Mời bạn nhập vào số thứ 2");
let sum = 1;
if(Number.isInteger(a) && Number.isInteger(b) && a != 0){

    for(let i = 0; i < Math.abs(b); i++){
        b>0?sum *= a:sum *= 1/a;
    }
    console.log(`Kết quả của ${a}^${b} là:${sum}`);
}else{
    console.log("Không hợp lệ");
}
