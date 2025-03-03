let a = +prompt("mời bạn nhập vào số thứ 1");
let b = +prompt("mời bạn nhập vào số thứ 2");
let c = +prompt("mời bạn nhập vào số thứ 3");
let number =(a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log(`số lớn nhất trong 3 số là${number}`);