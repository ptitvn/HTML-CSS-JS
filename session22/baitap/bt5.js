let number = [1,4,7,8,3];
let sum=0;
let sum1=0;
for(let i =0;i<number.length;i++){
    if(number[i]%2===0){
        sum += number[i];
    }else{
        sum1 += number[i];
    }
}
console.log(`tổng các số chẵn là ${sum}`);
console.log(`tổng các số lẻ là ${sum1}`);