function string(){
    let email = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]; 
    if(Array.isArray(email)){   
        let str = email.filter((item) => item.includes("@") && !item.includes(" "));
        if(str){
            console.log(str);
        }
        
    }
    
}
console.log(string());