let numbera = Number(prompt("mời bạn nhập vào số thứ 1"));
let numberb = Number(prompt("mời bạn nhập vào số thứ 2"));
let numberc = Math.floor(Math.random() * (numbera - numberb) + numberb);
document.write("số ngẫu nhiên là:",numberc);