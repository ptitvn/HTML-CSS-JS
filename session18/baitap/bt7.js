let a = +prompt("Mời bạn nhập vào số thứ 1");
let b = +prompt("Mời bạn nhập vào số thứ 2");
let mark = prompt("Mời bạn vào dấu + - * /");
if(mark === "+"){
    let sum = a + b;
    alert(`Kết quả của phép tính là ${sum}`);
}else if(mark === "-"){
    let sum = a - b;
    alert(`Kết quả của phép tính là ${sum}`);
}else if(mark === "*"){
    let sum = a * b;
    alert(`Kết quả của phép tính là ${sum}`);
}else if(mark === "*"){
    let sum = a / b;
    alert(`Kết quả của phép tính là ${sum}`);
}else{
    alert(`không có phép tính`);
}