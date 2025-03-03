let string = prompt("Mời bạn nhập");
if(string.includes(1) ||string.includes(2) ||string.includes(3) ||string.includes(4) || string.includes(5) || string.includes(6) || string.includes(7) ||string.includes(8) ||string.includes(9)){
    console.log(`${string} không phải là chữ cái`);
}else{
    console.log(`chữ ${string} là chữ cái`);
}
