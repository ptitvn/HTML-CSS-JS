let users= [];
function string(email){
    
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại.");
    } else {
        users.push(email);
        console.log("Đăng ký thành công.");
        console.log(users);
    }
    
}
let email = prompt("Mời bạn nhập email");
string(email);
