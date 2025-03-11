let users= [];
function isValidEmail(string) {
    let testString = string.includes("@");
    let test = string.endsWith(".com")
    let test2 = string.endsWith(".vn")
    
}
function string(email){
    if (isValidEmail(email)) {
        console.log("Email không hợp lệ. Vui lòng nhập lại.");
        return;
    }

    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại.");
    } else {
        users.push(email);
        console.log("Đăng ký thành công.");
    }
    
}
let email = prompt("Mời bạn nhập email");
string(email);
