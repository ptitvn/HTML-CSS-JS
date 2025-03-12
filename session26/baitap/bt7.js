function number(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if(arr.length ==0){
        return "Không có phần tử"
    }
    if(Array.isArray(arr)){
        let squaredArr = arr.map(num => num * num);
        let evenSquaredArr = squaredArr.filter(num => num % 2 === 0);
        console.log("Mảng ban đầu:", arr);
        console.log("Mảng sau khi bình phương:", squaredArr);
        console.log("Mảng các giá trị bình phương là số chẵn:", evenSquaredArr);
    }
}
console.log(number());