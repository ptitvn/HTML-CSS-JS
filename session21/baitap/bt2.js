let n = 5;
let b = 0;
let a = 0;
for(let i= 0; i<n ; i++){
    let number =+prompt("Mời bạn nhập vào số");
    if(number%2===0){
        a++;
    }else{
        b++;
    }
}
console.log(`Tổng số lẻ là ${b} : Tổng số chẵn là ${a}`);