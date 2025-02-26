let toán= Number(prompt("mời bạn nhập điểm trung bình môn toán"));
let lý = +prompt("mời bạn nhập điểm trung bình môn lý");
let hóa = +prompt("mời bạn nhập điểm trung bình môn hóa");
let avg =(toán + lý + hóa)/3;
let result= avg.toFixed(2);
console.log("điểm bạn vừa nhập là ",avg);