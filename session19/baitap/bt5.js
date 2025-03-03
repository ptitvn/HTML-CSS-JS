let string = prompt("mời bạn nhập ký tự");
if(string.includes(" ")){
    console.log(`${string} chứa khoảng trắng`);
}else{
    console.log(`${string} Không chứa khoảng trắng`);
}