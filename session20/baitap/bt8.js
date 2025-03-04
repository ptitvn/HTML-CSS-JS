let n = +prompt("Mời bạn nhập ");
let count = 0;
let num = 2;
let result = "";
if(Number.isInteger(n) && n <100 && n>1){
    while(count<n){
        let flag = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                flag = false; 
                break;
            }  
        }
        if(flag){
            result += num + " ";
            count++;
        }
        num++; 
    }
    console.log(result);
    
    
}