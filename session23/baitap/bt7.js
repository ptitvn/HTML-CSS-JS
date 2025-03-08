let n = Number(prompt("Mời bạn nhập"));
let arr = [];
if(n===0){
    console.log("Mảng không có phần tử");
}else if(n<0){
    console.log("Số lượng phần tử không hợp lệ");
}else{
    for (let i = 0; i < n; i++) {
        let element = prompt("Nhập phần tử thứ :"+(i+1));
        arr.push(element);
        
    }
    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] < max1) {
            max2 = arr[i];
        }
    }
    if (max2 === -Infinity) {
        console.log("Không có số lớn thứ hai trong mảng.");
    } else {
        console.log("Số lớn thứ hai trong mảng là: " + max2);
    }
}
