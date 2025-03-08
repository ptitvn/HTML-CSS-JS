let n = +prompt("Mời bạn nhập");
if(n===0){
    console.log("Mảng không có phần tử");
}else if(n<0){
    console.log("Số lượng phần tử không hợp lệ");
}else{
    let array = [];
    let negativeCount = 0;

    for (let i = 0; i < n; i++) {
        let element = Number(prompt("Nhập phần tử thứ :"+`${i+1}`));
        array.push(element);
        if (element < 0) {
            negativeCount++;
        }
    }
    console.log(negativeCount);
}