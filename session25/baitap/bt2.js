function sum(a,b){
    if(Number.isInteger(a)&& Number.isInteger(b)){
        return a + b;

    }
    return "Dữ liệu không hợp lệ"

}
let numbera = +prompt("Mời bạn nhập vào số thứ 1");
let numberb = +prompt("Mời bạn nhập vào số thứ 2");
console.log(sum(numbera,numberb)) 