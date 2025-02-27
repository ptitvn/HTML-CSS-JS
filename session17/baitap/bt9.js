let a = +prompt("mời bạn nhập vào số thứ 1");
let b = +prompt("mời bạn nhập vào số thứ 2");
let c = +prompt("mời bạn nhập vào số thứ 3");
let delta = (b*b)-(4*a*c);
let x1 = (-b + Math.sqrt(delta)/(2*a));
let x2 = (-b - Math.sqrt(delta)/(2*a));
document.write(`phương trình có 2 nghiệm là ${x1} và ${x2}`);