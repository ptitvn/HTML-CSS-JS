let string = prompt("Mời bạn nhập số tiền bạn muốn đổi là USD hay VND");
if(string == "VND"){  
    let number = +prompt("mời bạn nhập VND Muốn đổi sang USD");
    let number1 = number / 23000;
    console.log(`số tiền vừa đổi là:${number1} USD`);
}else if(string == "USD"){
    let number = +prompt("mời bạn nhập USD Muốn đổi sang VND");
    let number1 = number * 23000;
    console.log(`số tiền vừa đổi là:${number1} VND`);
}
