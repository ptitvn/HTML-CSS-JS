let number = +prompt("Mời bạn nhập vào số năm 1-12");
switch (number) {
    case 1:case 2: case 3:
        console.log(`mùa xuân`);
        break;
    case 4: case 5: case 6:
        console.log(`mùa hạ`);
        break;
    case 7:case 8: case 9:
        console.log(`mùa thu`);
        break;
    case 10: case 11: case 12:
        console.log(`Mùa đông`);
        break;
    default:
        console.log(`tháng không hợp lệ`);
        break;
}