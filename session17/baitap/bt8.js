let date1 = prompt("Mời bạn nhập lần 1 (YYYY-MM-DD)");
let date2 = prompt("Mời bạn nhập lần 2 (YYYY-MM-DD)");
let uneven = (new Date(date1) - new Date(date2)) / 86400000;
alert(uneven);