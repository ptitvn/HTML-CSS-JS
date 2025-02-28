let string= prompt("Mời bạn nhập từ vào bàn phím");
if(string === "ADMIN"){
    let pass = prompt("Mời bạn nhập mật khẩu"); 
    if(pass === "TheMaster"){
        alert(`Welcome`);
    }else if(pass === ''){
        alert(`Cancelled`);
    }else{
        alert(`Wrong password.`);
    }
}else if(string === ''){
    alert(`Cancelled`);
}else{
    alert("I Don’t know you");
}