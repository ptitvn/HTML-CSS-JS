let n = Number(prompt("Mời bạn nhập"));
let array = [];
let sum = 0;
let sum2=0
let sum3=0;
if(n===0){
    console.log("Mảng không có phần tử");
}else if(n<0){
    console.log("Số lượng phần tử không hợp lệ");
}else{
    for (let i = 0; i < n; i++) {
        let element = prompt("Nhập phần tử thứ :"+(i+1));
        array.push(element);
        
    }
    for(let i = 0;i<array.length;i++){
        let char=array[i];
        if (char >= '0' && char <= '9' ){       
            sum +=  Number(char);
        }
        if( char >= '-1' && char <= '-9'){
            sum2 += Number(char);
        }
    }
    sum3 = sum + sum2
    console.log(sum3);
}