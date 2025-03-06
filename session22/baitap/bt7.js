let arr =[34, 7, 23, 32, 5, 62, 32, 12, 22, 11];
for(let i =0 ;i< arr.length -1;i++){
    for(let j = i +1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;  
        }
    }
}
console.log(arr);