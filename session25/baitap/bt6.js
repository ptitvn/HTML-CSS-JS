function isPalindrome(b){
    check = 0;
    for(let i = 0 ; i < b.length /2;i++){
        if(b[i] !== b[b.length -1 -i]){
            check ++;
            console.log(`${a} không phải là chuỗi đối xứng`);
            break;
        }
    }
    check==0? console.log("Đây là số đối xứng"):console.log("..");
}
let a = prompt("Mời bạn nhập");
isPalindrome(a);