let n = +prompt("Mời bạn nhập");
if(n===0){
    console.log("Mảng không có phần tử");
}else{
    let array = [];
    let negativeCount = "";

    for (let i = 0; i < n; i++) {
        let element = prompt("Nhập phần tử thứ :"+`${i + 1}`);
        array.push(element);
        if (element >= '0' && element <= '9'){
            negativeCount += element+" "+"";
        }
    }
    console.log(negativeCount);
}