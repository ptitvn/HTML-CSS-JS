let a = +prompt("Mời bạn nhập vào cạnh thứ nhất của tam giác");
let b = +prompt("Mời bạn nhập vào cạnh thứ hai của tam giác");
let c = +prompt("Mời bạn nhập vào cạnh thứ ba của tam giác");
if(a+b > c || b + c >a|| c+a >b){
    if(a === b && b === c){
        alert("là tam giác đều");
    }else if(a === b || a=== c || b === c){
        alert("là tam giác cân");
    }else if((a*a)+ (b*b) === (c*c)|| (a*a) + (C*c) === (b*b) || (b*b)+(c*c)===(a*a)){
        alert("là tam giác vuông");
    }else{
        alert("là tam giác thường");
    }
}else{
    alert("Không phải là tam giác");
}
