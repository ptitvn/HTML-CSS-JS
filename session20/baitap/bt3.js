let a = +prompt("Mời bạn nhập vào chuỗi");
let b = a.toString();
let check = 0;
if(Number.isInteger(a)){
    for(let i = 0 ; i < b.length /2;i++){
        if(b[i] !== b[b.length -1 -i]){
            check ++;
            console.log(`${a} không phải là chuỗi đối xứng`);
            break;
        }
    }
    check==0? console.log("Đây là số đối xứng"):console.log("..");
}else{
    console.log("chuỗi không hợp lệ");
}

