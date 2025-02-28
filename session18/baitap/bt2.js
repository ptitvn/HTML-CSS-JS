let number1 = +prompt("mời bạn nhập vào điểm môn toán");
let number2 = +prompt("mời bạn nhập vào điểm môn Văn");
let number3 = +prompt("mời bạn nhập vào điểm môn Anh");
let sum = (number1 + number2 + number3)/3;
if(sum >= 8){
    alert(`Giỏi`);
}else if(sum >=6.5 ){
    alert(`khá`);
}else if(sum >=5){
    alert(`trung bình`);
}else{
    alert(`bạn yếu`);
}


