let number = +prompt("Mời bạn nhập số năm kinh nghiệm của bạn");
if(number <= 1){
    alert(`Mới vào nghề`);
}else if(number <=3){
    alert(`Nhận viên có kinh nghiệm`);
}else if(number >= 4 || number <= 6){
    alert(`Chuyên nghiệp`);
}else if(number > 6){
    alert(`Quản lý`);
}
