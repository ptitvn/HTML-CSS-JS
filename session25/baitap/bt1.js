function min(array){
    if (Array.isArray(array)) {
        if(array.length === 0){
            return "Mảng không chứa phần tử"
        }
        let minValue = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
            }
        } 
        console.log("Phần tử nhỏ nhất là"+ minValue);
        return minValue;
        
    }
    
}
min([2,6,3,1,4,5]);
