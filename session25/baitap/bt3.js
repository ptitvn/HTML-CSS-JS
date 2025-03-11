function hienThiSoChan(array) {
    if(Array.isArray(array)){
        if(array.length === 0){
            return "Mảng không chứa phần tử"
        }
        let even = [];
        for(let i = 0; i <array.length;i++){
            if(array[i]%2==0){
                even.push(array[i]);
            }
        }
        console.log("Các số chẵn trong mảng là:", even);
        return even;
    }
    
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
hienThiSoChan(arr);