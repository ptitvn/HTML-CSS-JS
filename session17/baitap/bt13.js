let number = +prompt("mời bạn nhập vào số tiền muốn gửi");
let number1 = +prompt("mời bạn nhập tháng muốn gửi");
let number2 = number* (4.3/100) * (number1* 30/365);
alert(`số lãi là ${number2}`);