let string = prompt("Mời bạn nhập vào chuỗi ký tự bất kỳ");
let str = prompt("Mời bạn nhập vào ký tự cần tìm trong ký tự bạn vừa nhập");
let flag = -1;
for(let i = 0;i<string.length;i++){ 
    if(string[i]===str ){
        flag ++;
    }
}
flag === -1? console("Không tồn tại"):console.log("Tồn tại");
