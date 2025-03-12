function max(arr){
    if(Array.isArray(arr)){
        if(array.length === 0){
            return "Mảng không chứa phần tử"
        }
        
        let max = arr.filter(num => num >= 10);
        console.log(max);
        return max;
    }
    console.log("Không hợp lệ")
    return;
    
}
let array = [];
let number = 10;

    for(let i =0;i<number;i++){
        let arr = +prompt("Mời bạn nhập vào mảng");
        if(Number.isInteger(arr)){
            array.push(arr);
        }

    }
    max(array);
