let arr = prompt("Mời bạn nhập vào phần tử");
let arrsplit = arr.split("");
let maxarr =[];
let arrindex = 0;
if(arrsplit.length === 0){
    console.log("Không có giá trị");
}else{
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>maxarr){
            maxarr = arr[i];
            arrindex = i;
        }
    }
    console.log("Số lớn nhất:"+maxarr);
    console.log("vị trí"+arrindex);
}
