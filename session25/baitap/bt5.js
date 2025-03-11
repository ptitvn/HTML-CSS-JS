function positive (arr){
    let count = 0;
    if(Array.isArray(arr)){
        for(let i =0;i<arr.length;i++){
            if(Number.isInteger(arr[i])&& arr[i] >0){
                count++;
            }
        }
    }
    if(count>0){
        console.log(count);
    }else{
        console.log("Không có số nguyên dương trong mảng");
    }
}
positive([1,-3,4,-5,2.4]);