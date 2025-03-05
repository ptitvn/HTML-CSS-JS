let n = 5;
let sum =0;
for(let i =0;i<n;i++){
    let number = +prompt("Mời bạn nhập vào số"); 
    if(number %2!==0){
      sum += number;
    }
}
console.log(sum);