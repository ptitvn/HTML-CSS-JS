let arr=[2,5,7,4,1,8,6,2,5,7];
let numbers= +prompt("Mời bạn nhập số");
let count = 0;
    for(let i =0; i<arr.length;i++){
        if(arr[i]===numbers){
            count++;
        }
    }
if(count>0){
    console.log(`Số ${numbers} xuất hiện ${count} lần trong mảng.`);
}else{
    console.log("Số không tồn tại");
}