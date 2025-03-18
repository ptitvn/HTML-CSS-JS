
let storedUser = {}
function main(){
    let choice = 0;
    do {
        choice = +prompt(`
            1.Đăng nhập
            2.Đăng ký
            3.thoát`);
        switch (choice) {
            case 1:
                let logemail = prompt("Mời bạn nhập email");
                let logpass = prompt("Mời bạn nhập mật khẩu")
                loginUser(logemail, logpass);
                break;
            case 2:
                let name = prompt("Mời nhập tên");
                let email = prompt("Mời bạn nhập email");
                let password = prompt("MỜi bạn nhập mật khẩu")
                registerUser(name,email, password);
                break;
            case 3:
                break;
        
            default:
                console.log("Không tồn tại");
                break;
        }
    } while (choice !=0);
}

main();
// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
    for(let i =0;i<email.length;i++){
        if(!email.includes("@") && !email.endsWith(".com"||!email.endsWith(".vn"))        ){
           
                console.log("Email không hợp lệ. Vui lòng nhập lại.");
                return;
            
        }
    }
    
}
function isValidPassword(password) {
    if(!password.length>6){
        return "password phải lớn hơn 6 ký tự";
    }
    if(!password.includes("!")||!password.includes("@")||!password.includes("#")||!password.includes("$")||!password.includes("%")||!password.includes("^")||!password.includes("&")||!password.includes("*") && !containsUpperCase(password)){
        return "Phải chứa ký tự đặc biệt và chữ hoa";

    }
}
function containsUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        return true;
      }
    }
    return false;
  }
  function registerUser(name, email, password) {
    if (isValidEmail(email)) {
        console.log("Email không hợp lệ. Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }

    if (!isValidPassword(password)) {
        console.log("Mật khẩu không hợp lệ. Mật khẩu phải từ 6 ký tự trở lên, bao gồm ký tự đặc biệt và ký tự viết hoa.");
        return;
    }

    if (storedUser.includes(email)) {
        console.log("Email đã tồn tại. Vui lòng sử dụng email khác.");
        return;
    }
    
    registerUser(name,email,password);
    
  
}
function registerUser(name, email,password ) {
    if (!email || !password || !name) {
        console.log("Vui lòng nhập đầy đủ thông tin đăng ký.");
        return;
    }
    storedUser = { name: name,
        email: email,
        password: password
    };
    console.log("Đăng ký thành công!");
}

function loginUser(email, password) {
    if (email === storedUser.email && password === storedUser.password) {
        if (!storedUser.name) {
            console.log("Thiếu tên ở phần đăng ký.");
        } else {
            console.log("Đăng nhập thành công! Chào mừng, " , storedUser);
        }
    } else {
        console.log("Email hoặc mật khẩu không đúng.");
    }
}