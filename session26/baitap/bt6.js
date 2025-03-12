let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
function number(arr){
    let array = [];
    let result;
    if(Array.isArray(arr)){
        if(arr.length !== 0){
            for(let i =0; i<arr.length;i++){
                let n = arr[i].split("-");
                array.push(n);
                array[i].reverse();
                
            }
            const joinedArray = array.map(subArray => subArray.join('/'));

            console.log(joinedArray);
           
            
        }
    }
}
console.log(number(arr))