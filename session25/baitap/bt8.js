function isStrongPassword(password){
    let a = 0;
    let b = 0;
    let c = 0;
    if(password.length<8){
        return false;
    }
    for(let i = 0;i<password.length;i++){  
        if(password[i]>='A'&&password[i]<='Z'){
            a++;
        }
        if(password[i]>='a'&&password[i]<='z'){
            b++;
        }
        if(password[i]>=0&&password[i]<=9){
            c++;
        }
        
    }
    if(a>0 && b>0 && c>0){
        return true;
    }else{
        return false;
    }

    
}
let n = prompt("Mời bạn nhập vào mật khẩu");
console.log(isStrongPassword(n));
