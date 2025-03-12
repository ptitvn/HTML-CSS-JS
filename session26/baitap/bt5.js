function number(){
    let array = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];
    if(array.length ==0){
        return "Không có phần tử"
    }
    if(Array.isArray(array)){
        let maxNumber = Math.max(...array);
        let maxIndex = array.indexOf(maxNumber);
        console.log(`Số lớn nhất là: ${maxNumber}`);
        console.log(`Vị trí của số lớn nhất là: ${maxIndex}`);
    }
    
}
console.log(number());